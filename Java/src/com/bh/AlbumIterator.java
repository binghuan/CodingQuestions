package com.bh;

import java.util.*;

// Coding question from Google Camera Team 2025-08-13

/**
 * Photos Slideshow Iterator (Simplified)
 * <p>
 * Problem (simplified by example):
 * Given two integer arrays:
 * favorite = [1, 2]
 * album    = [1, 2, 3, 4, 5]
 * Iterate in this order:
 * 1) Emit favorites first in given order → 1, 2
 * 2) Then emit album elements in given order, skipping those already emitted by id → 3, 4, 5
 * Final iteration output: 1, 2, 3, 4, 5
 * <p>
 * Complexity:
 * - Time (to iterate through the whole sequence): O(F + A), where F is the size of favorites and A is the size of album.
 * - Space: O(U) for the deduplication set, where U is the number of unique ids (U ≤ F + A).
 * - Each hasNext()/next() call is amortized O(1).
 */

// Note: This implementation uses primitive int arrays as inputs and iterates Integers.

/*
Reference - Solution 1 (precompute merged display list):

class AlbumIterator implements Iterator<PhotoObj> {
    private final List<PhotoObj> displayList;
    private int index = 0;

    public AlbumIterator(List<PhotoObj> favorites, List<PhotoObj> album) {
        LinkedHashSet<PhotoObj> orderedSet = new LinkedHashSet<>(favorites);
        orderedSet.addAll(album);
        this.displayList = new ArrayList<>(orderedSet);
    }

    @Override
    public boolean hasNext() {
        return index < displayList.size();
    }

    @Override
    public PhotoObj next() {
        if (!hasNext()) return null;
        return displayList.get(index++);
    }
}
*/

/*
Comparison: Eager Precompute vs Lazy Streaming (this class)

- What Solution 1 does (Eager Precompute):
  - Work: O(F + A) done upfront in the constructor to build a merged list
    using LinkedHashSet to preserve order and deduplicate.
  - Iteration: hasNext()/next() are O(1) with minimal logic.
  - Space: O(U) for the set + O(U) for the display list snapshot (roughly ~2U overall).
  - Behavior: Takes a snapshot at construction time. Later changes to source lists
    are not reflected. Simpler control flow during iteration.

- What this implementation does (Lazy Streaming):
  - Work: Spreads the O(F + A) across hasNext() calls; no upfront merge cost.
  - Iteration: Amortized O(1) per element; still linear overall.
  - Space: O(U) for the dedup set and O(1) extra (a small cache) — lower peak memory than precompute.
  - Behavior: Reads from favorites first, then album, skipping duplicates by id as encountered.

- Edge cases and robustness:
  - Null handling: This implementation skips null photo objects and null ids.
    Solution 1 as written will include possible nulls in the set/list and may return null from next().
  - Null lists: This implementation treats null inputs as empty lists. Solution 1 would need
    explicit null-guards (or require non-null inputs) to avoid NPE in the constructor.
  - Equality semantics: Solution 1 dedup relies on PhotoObj.equals/hashCode. With a record PhotoObj(String id),
    equality is by id, which matches the requirement. If equality changed in the future, Solution 1 might
    need adapters (e.g., use ids in the set) while this implementation already dedups by id.

- When to choose which:
  - Choose precompute if iteration speed simplicity matters and memory is not a concern.
  - Choose streaming if input can be large, you want lower peak memory, or you prefer lazy evaluation.
*/

class AlbumIterator implements Iterator<Integer> {
    private final int[] favorites;
    private final int[] album;
    private int iFav = 0;
    private int iAlb = 0;
    private final Set<Integer> seen = new HashSet<>(); // Deduplicate by id
    private Integer nextCache = null;

    public AlbumIterator(int[] favorites, int[] album) {
        this.favorites = (favorites == null) ? new int[0] : favorites;
        this.album = (album == null) ? new int[0] : album;
    }

    @Override
    public boolean hasNext() {
        if (nextCache != null) return true;

        // 1) Emit favorites first (ids not yet output)
        while (iFav < favorites.length) {
            int id = favorites[iFav++];
            if (seen.add(id)) {
                nextCache = id;
                return true;
            }
        }
        // 2) Then emit album (ids not yet output)
        while (iAlb < album.length) {
            int id = album[iAlb++];
            if (seen.add(id)) {
                nextCache = id;
                return true;
            }
        }
        return false;
    }

    @Override
    public Integer next() {
        if (!hasNext()) throw new NoSuchElementException();
        Integer out = nextCache;
        nextCache = null;
        return out;
    }

    public static void main(String[] args) {
        // Simplified example from problem statement
        int[] favorite = new int[] {5, 6, 7};
        int[] album = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        AlbumIterator it = new AlbumIterator(favorite, album);
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}

