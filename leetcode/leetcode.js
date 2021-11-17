(function () {
    let questionMap = {};

    let previousCount = 0;
    if (localStorage.StoredListByBH != null && localStorage.StoredListByBH.trim().length > 0) {

        let items = JSON.parse(localStorage.StoredListByBH);

        items.forEach((item) => {
            questionMap[item.title] = {
                difficulty: item.difficulty,
                link: item.link
            }
        })
        previousCount = items.length;
    }

    let rows = document.querySelectorAll('div[role="rowgroup"] > div[role="row"]');
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let title = row.querySelectorAll('.truncate')[0].innerText;
        let difficulty = row.querySelectorAll('div[role="cell"]')[4].innerText;
        let link = row.querySelectorAll('.truncate > a')[0].href;
        questionMap[title] = {
            difficulty: difficulty,
            link: link
        };
    }

    let titles = Object.keys(questionMap);
    let questionArray = [];
    let result = "";

    titles.sort((a, b) => {
        return parseInt(a.split(".")[0]) - parseInt(b.split(".")[0])
    })

    titles.forEach((title) => {
        questionArray.push({
            title: title,
            difficulty: questionMap[title].difficulty,
            link: questionMap[title].link
        })

        result += `LeetCode #${title}: ${questionMap[title].difficulty}; ${questionMap[title].link}\n`;
    })

    console.log("OUTPUT:");
    console.log(result);
    console.log("Previoius:", previousCount);
    console.log("Now:", questionArray.length);

    localStorage.StoredListByBH = JSON.stringify(questionArray);
})()

// Inject the script on website https://leetcode.com/problemset/all/ to get all titles
/*
    -- Sample of Output

LeetCode #84. Largest Rectangle in Histogram: Hard; https://leetcode.com/problems/largest-rectangle-in-histogram
LeetCode #85. Maximal Rectangle: Hard; https://leetcode.com/problems/maximal-rectangle
LeetCode #86. Partition List: Medium; https://leetcode.com/problems/partition-list
LeetCode #87. Scramble String: Hard; https://leetcode.com/problems/scramble-string
LeetCode #88. Merge Sorted Array: Easy; https://leetcode.com/problems/merge-sorted-array
LeetCode #89. Gray Code: Medium; https://leetcode.com/problems/gray-code
LeetCode #90. Subsets II: Medium; https://leetcode.com/problems/subsets-ii
LeetCode #91. Decode Ways: Medium; https://leetcode.com/problems/decode-ways
LeetCode #92. Reverse Linked List II: Medium; https://leetcode.com/problems/reverse-linked-list-ii
LeetCode #93. Restore IP Addresses: Medium; https://leetcode.com/problems/restore-ip-addresses
LeetCode #94. Binary Tree Inorder Traversal: Easy; https://leetcode.com/problems/binary-tree-inorder-traversal
LeetCode #95. Unique Binary Search Trees II: Medium; https://leetcode.com/problems/unique-binary-search-trees-ii
LeetCode #96. Unique Binary Search Trees: Medium; https://leetcode.com/problems/unique-binary-search-trees
LeetCode #97. Interleaving String: Medium; https://leetcode.com/problems/interleaving-string
LeetCode #98. Validate Binary Search Tree: Medium; https://leetcode.com/problems/validate-binary-search-tree
LeetCode #99. Recover Binary Search Tree: Medium; https://leetcode.com/problems/recover-binary-search-tree
LeetCode #100. Same Tree: Easy; https://leetcode.com/problems/same-tree

*/