// Coding question from Google Camera Team 2025-08-13

/**
 * Photos Slideshow (Simplified)
 *
 * Problem Description:
 * Given two integer arrays:
 *   favorite = [1, 2]
 *   album    = [1, 2, 3, 4, 5]
 * Iterate in this order:
 *   1) Emit favorites first in given order → 1, 2
 *   2) Then emit album elements in given order, skipping those already emitted by id → 3, 4, 5
 * Final iteration output: 1, 2, 3, 4, 5
 *
 */

function* photoIterator(favorite, album) {
    const seen = new Set();

    // Output favorites first
    for (const id of favorite) {
        if (!seen.has(id)) {
            seen.add(id);
            yield id;
        }
    }

    // Output remaining album elements
    for (const id of album) {
        if (!seen.has(id)) {
            seen.add(id);
            yield id;
        }
    }
}

// Test
const favorite = [5, 4];
const album = [1, 2, 3, 4, 5];
for (const id of photoIterator(favorite, album)) {
    console.log(id); // 1, 2, 3, 4, 5
}
