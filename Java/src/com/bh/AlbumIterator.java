package com.bh;

import java.util.*;

// Coding question from Google Camera Team 2025-08-13

/**
 * Photos Slideshow Iterator
 * <p>
 * Problem:
 * Implement an Iterator that plays photos in the following order:
 * 1) Play photos from favorites first (keep original order).
 * 2) Then play photos from album (keep original order).
 * 3) If a photo appears in both favorites and album (determined by id), play it only once.
 * <p>
 * Complexity:
 * - Time (to iterate through the whole sequence): O(F + A), where F is the size of favorites and A is the size of album.
 * - Space: O(U) for the deduplication set, where U is the number of unique ids (U ≤ F + A).
 * - Each hasNext()/next() call is amortized O(1).
 */

record PhotoObj(String id) {

    @Override
    public String toString() {
        return id;
    }
}

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

class AlbumIterator implements Iterator<PhotoObj> {
    private final List<PhotoObj> favorites;
    private final List<PhotoObj> album;
    private int iFav = 0;
    private int iAlb = 0;
    private final Set<String> seen = new HashSet<>(); // Deduplicate by id
    private PhotoObj nextCache = null;

    public AlbumIterator(List<PhotoObj> favorites, List<PhotoObj> album) {
        this.favorites = (favorites == null) ? Collections.emptyList() : favorites;
        this.album = (album == null) ? Collections.emptyList() : album;
    }

    @Override
    public boolean hasNext() {
        if (nextCache != null) return true;

        // 1) Emit favorites first (ids not yet output)
        while (iFav < favorites.size()) {
            PhotoObj p = favorites.get(iFav++);
            if (p != null && p.id() != null && seen.add(p.id())) {
                nextCache = p;
                return true;
            }
        }
        // 2) Then emit album (ids not yet output)
        while (iAlb < album.size()) {
            PhotoObj p = album.get(iAlb++);
            if (p != null && p.id() != null && seen.add(p.id())) {
                nextCache = p;
                return true;
            }
        }
        return false;
    }

    @Override
    public PhotoObj next() {
        if (!hasNext()) throw new NoSuchElementException();
        PhotoObj out = nextCache;
        nextCache = null;
        return out;
    }

    public static void main(String[] args) {
        List<PhotoObj> favorites = Arrays.asList(new PhotoObj("7"),
                new PhotoObj("8"),
                new PhotoObj("9"));
        List<PhotoObj> album = Arrays.asList(new PhotoObj("1"),
                new PhotoObj("2"), new PhotoObj("3"),
                new PhotoObj("4"), new PhotoObj("5"),
                new PhotoObj("6"), new PhotoObj("7"),
                new PhotoObj("8"), new PhotoObj("9"),
                new PhotoObj("10"));

        AlbumIterator it = new AlbumIterator(favorites, album);
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}

