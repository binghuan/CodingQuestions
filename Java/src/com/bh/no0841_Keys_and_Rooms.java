package com.bh;

import java.util.List;

public class no0841_Keys_and_Rooms {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        boolean[] visited = new boolean[rooms.size()];
        dfs(rooms, 0, visited);
        for (boolean v : visited) {
            if (!v) {
                return false;
            }
        }
        return true;
    }

    private void dfs(List<List<Integer>> rooms, int room, boolean[] visited) {
        if (visited[room]) return;
        visited[room] = true;
        for (int key : rooms.get(room)) {
            dfs(rooms, key, visited);
        }
    }

    public static void main(String[] args) {
        no0841_Keys_and_Rooms solver = new no0841_Keys_and_Rooms();
        // Test case 1: [[1],[2],[3],[]] => true
        List<List<Integer>> rooms1 = List.of(List.of(1), List.of(2), List.of(3), List.of());
        System.out.println("Test case 1: " + solver.canVisitAllRooms(rooms1)); // true

        // Test case 2: [[1,3],[3,0,1],[2],[0]] => false
        List<List<Integer>> rooms2 = List.of(List.of(1, 3), List.of(3, 0, 1), List.of(2), List.of(0));
        System.out.println("Test case 2: " + solver.canVisitAllRooms(rooms2)); // false

        // Test case 3: [[1],[2],[],[0]] => false (room 3 is unreachable)
        List<List<Integer>> rooms3 = List.of(List.of(1), List.of(2), List.of(), List.of(0));
        System.out.println("Test case 3: " + solver.canVisitAllRooms(rooms3)); // false

        // Test case 4: [[1,2,3],[],[],[]] => true (all keys in room 0)
        List<List<Integer>> rooms4 = List.of(List.of(1, 2, 3), List.of(), List.of(), List.of());
        System.out.println("Test case 4: " + solver.canVisitAllRooms(rooms4)); // true

        // Test case 5: [[1],[2],[0]] => true (cycle)
        List<List<Integer>> rooms5 = List.of(List.of(1), List.of(2), List.of(0));
        System.out.println("Test case 5: " + solver.canVisitAllRooms(rooms5)); // true
    }
}
