'use strict';
const https = require('https');

// Coding quest from REAP
/**
 * Problem: Fetch and rank top article names across multiple paginated API responses.
 *
 * Input: an integer `limit` – number of article names to return.
 * Output: a string array of length `limit` – the top-ranked article names.
 *
 * API: https://jsonmock.hackerrank.com/api/articles?page=<pageNumber>
 * - pageNumber starts from 1 up to `total_pages`.
 * - Each response contains:
 *   - total_pages: total number of pages
 *   - data: array of articles; each article may contain
 *     - title (string | null)
 *     - story_title (string | null)
 *     - num_comments (number | null)
 *
 * Name picking rule per article:
 * 1) If title != null → use title
 * 2) Else if story_title != null → use story_title
 * 3) Else skip the article
 *
 * Sorting rules:
 * 1) By num_comments descending (missing treated as 0)
 * 2) If equal, by name lexicographically descending (Z → A)
 *
 * Return: top `limit` names after sorting.
 */

function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function topArticles(limit) {
  const baseURL = 'https://jsonmock.hackerrank.com/api/articles?page=';
  
  // Fetch the first page to learn total_pages
  const firstPage = await getJSON(baseURL + '1');
  const totalPages = firstPage.total_pages;
  
  const articles = [];
  
  function collectArticles(pageData) {
    for (const item of pageData.data) {
      const name = item.title ?? item.story_title ?? null;
      if (!name) continue; // skip entries without a usable name
      const comments = item.num_comments ?? 0;
      articles.push({ name, comments });
    }
  }
  
  collectArticles(firstPage);
  
  // Fetch remaining pages concurrently
  const promises = [];
  for (let page = 2; page <= totalPages; page++) {
    promises.push(getJSON(baseURL + page));
  }
  const pagesData = await Promise.all(promises);
  pagesData.forEach(collectArticles);
  
  // Sort: comments desc, then name desc
  articles.sort((a, b) => {
    if (b.comments !== a.comments) return b.comments - a.comments;
    return b.name.localeCompare(a.name);
  });
  
  // 取前 limit 個名字
  return articles.slice(0, limit).map(a => a.name);
}

// ------------------------------
// Lightweight tests (mocked API)
// ------------------------------
if (require.main === module) {
  // Simple mock layer: override getJSON for deterministic tests.
  const realGetJSON = getJSON;

  async function runTests() {
    console.log('=== TopArticles tests (mocked) ===\n');

    // Case 1: two pages, mix of title/story_title/null
    const pages = {
      1: {
        total_pages: 2,
        data: [
          { title: 'Alpha', story_title: null, num_comments: 10 },
          { title: null, story_title: 'Beta', num_comments: 10 },
          { title: null, story_title: null, num_comments: 100 }, // skipped
        ],
      },
      2: {
        total_pages: 2,
        data: [
          { title: 'Gamma', story_title: null, num_comments: 5 },
          { title: null, story_title: 'Delta', num_comments: 10 },
          { title: 'Epsilon', story_title: null, num_comments: null }, // 0 comments
        ],
      },
    };

    // Monkey-patch getJSON
    global.getJSON = async (url) => {
      const m = url.match(/page=(\d+)/);
      const page = Number(m[1]);
      return pages[page];
    };

    const names3 = await topArticles(3);
    console.log('Case 1 (limit=3) ->', names3);
    // Expected sorting:
    // num_comments=10: Alpha, Beta, Delta -> name desc: Delta, Beta, Alpha
    // then Gamma(5), Epsilon(0)
    // So first 3: [ 'Delta', 'Beta', 'Alpha' ]

    // Case 2: single page, ties on comments and names descending
    const pages2 = {
      1: {
        total_pages: 1,
        data: [
          { title: 'Zoo', story_title: null, num_comments: 2 },
          { title: 'apple', story_title: null, num_comments: 2 },
          { title: null, story_title: 'Mango', num_comments: 3 },
          { title: null, story_title: null, num_comments: 7 }, // skip
        ],
      },
    };

    global.getJSON = async (url) => pages2[1];
    const names2 = await topArticles(2);
    console.log('Case 2 (limit=2) ->', names2);
    // Expected: Mango(3) first, then among (Zoo, apple) with 2 comments -> name desc: 'apple' < 'Zoo', so 'Zoo' first
    // Result: [ 'Mango', 'Zoo' ]

    // Restore real getJSON if needed afterwards
    global.getJSON = realGetJSON;
  }

  runTests().catch(err => {
    console.error('Test run failed:', err);
    process.exit(1);
  });
}
