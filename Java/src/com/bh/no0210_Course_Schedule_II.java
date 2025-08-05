package com.bh;

import java.util.*;

/**
 * LeetCode 210: Course Schedule II
 * 
 * Problem: There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take 
 * course bi first if you want to take course ai.
 * 
 * Return the ordering of courses you should take to finish all courses. If there are many valid answers, 
 * return any of them. If it is impossible to finish all courses, return an empty array.
 * 
 * This is essentially a topological sorting problem in a directed graph.
 * If there's a cycle in the prerequisites, it's impossible to finish all courses.
 */
public class no0210_Course_Schedule_II {

    /**
     * Solution 1: DFS with Topological Sort
     * 
     * We use DFS to detect cycles and build topological order simultaneously.
     * The key insight is to add nodes to the result in reverse order of completion.
     * 
     * Time Complexity: O(V + E) where V = numCourses, E = prerequisites.length
     * Space Complexity: O(V + E) for adjacency list and recursion stack
     */
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        // Build adjacency list representation of the graph
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        
        // Add edges: for [a, b], we need to take b before a
        // So b -> a (b is prerequisite of a)
        for (int[] prereq : prerequisites) {
            graph.get(prereq[1]).add(prereq[0]);
        }
        
        // Color array: 0 = WHITE (unvisited), 1 = GRAY (visiting), 2 = BLACK (visited)
        int[] color = new int[numCourses];
        List<Integer> topologicalOrder = new ArrayList<>();
        
        // Check each course for cycles and build topological order
        for (int i = 0; i < numCourses; i++) {
            if (color[i] == 0) { // If unvisited
                if (hasCycle(graph, color, i, topologicalOrder)) {
                    return new int[0]; // Cycle detected, return empty array
                }
            }
        }
        
        // Reverse the order since we added in post-order
        Collections.reverse(topologicalOrder);
        return topologicalOrder.stream().mapToInt(i -> i).toArray();
    }
    
    /**
     * DFS helper method to detect cycle and build topological order
     * Returns true if cycle is detected starting from node 'course'
     */
    private boolean hasCycle(List<List<Integer>> graph, int[] color, int course, List<Integer> topologicalOrder) {
        // Mark current node as GRAY (currently visiting)
        color[course] = 1;
        
        // Visit all neighbors
        for (int neighbor : graph.get(course)) {
            if (color[neighbor] == 1) {
                // Found a back edge (cycle)
                return true;
            }
            if (color[neighbor] == 0 && hasCycle(graph, color, neighbor, topologicalOrder)) {
                // Recursively check unvisited neighbors
                return true;
            }
        }
        
        // Mark current node as BLACK (completely processed)
        color[course] = 2;
        // Add to topological order (post-order)
        topologicalOrder.add(course);
        return false;
    }
    
    /**
     * Solution 2: BFS with Kahn's Algorithm (Topological Sort)
     * 
     * The idea is to use Kahn's algorithm for topological sorting.
     * We start with nodes that have no incoming edges (in-degree 0).
     * 
     * Time Complexity: O(V + E)
     * Space Complexity: O(V + E)
     */
    public int[] findOrderBFS(int numCourses, int[][] prerequisites) {
        // Build adjacency list and in-degree array
        List<List<Integer>> graph = new ArrayList<>();
        int[] inDegree = new int[numCourses];
        
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        
        // Build graph and calculate in-degrees
        for (int[] prereq : prerequisites) {
            graph.get(prereq[1]).add(prereq[0]);
            inDegree[prereq[0]]++;
        }
        
        // Find all nodes with in-degree 0 (no prerequisites)
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) {
                queue.offer(i);
            }
        }
        
        List<Integer> result = new ArrayList<>();
        
        // Process nodes with in-degree 0
        while (!queue.isEmpty()) {
            int course = queue.poll();
            result.add(course);
            
            // Remove this course and update in-degrees of dependent courses
            for (int dependentCourse : graph.get(course)) {
                inDegree[dependentCourse]--;
                if (inDegree[dependentCourse] == 0) {
                    queue.offer(dependentCourse);
                }
            }
        }
        
        // If we processed all courses, return the order; otherwise return empty array
        return result.size() == numCourses ? 
               result.stream().mapToInt(i -> i).toArray() : 
               new int[0];
    }
    
    public static void main(String[] args) {
        no0210_Course_Schedule_II solution = new no0210_Course_Schedule_II();
        
        // Test Case 1: numCourses = 2, prerequisites = [[1,0]]
        // Expected: [0,1]
        int[][] prerequisites1 = {{1, 0}};
        int[] result1 = solution.findOrder(2, prerequisites1);
        System.out.println("Test Case 1 (DFS): " + Arrays.toString(result1)); // Should print [0, 1]
        
        int[] result1BFS = solution.findOrderBFS(2, prerequisites1);
        System.out.println("Test Case 1 (BFS): " + Arrays.toString(result1BFS)); // Should print [0, 1]
        
        // Test Case 2: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
        // Expected: [0,2,1,3] or [0,1,2,3] (multiple valid answers)
        int[][] prerequisites2 = {{1, 0}, {2, 0}, {3, 1}, {3, 2}};
        int[] result2 = solution.findOrder(4, prerequisites2);
        System.out.println("Test Case 2 (DFS): " + Arrays.toString(result2));
        
        int[] result2BFS = solution.findOrderBFS(4, prerequisites2);
        System.out.println("Test Case 2 (BFS): " + Arrays.toString(result2BFS));
        
        // Test Case 3: numCourses = 1, prerequisites = []
        // Expected: [0]
        int[][] prerequisites3 = {};
        int[] result3 = solution.findOrder(1, prerequisites3);
        System.out.println("Test Case 3 (DFS): " + Arrays.toString(result3)); // Should print [0]
        
        int[] result3BFS = solution.findOrderBFS(1, prerequisites3);
        System.out.println("Test Case 3 (BFS): " + Arrays.toString(result3BFS)); // Should print [0]
        
        // Test Case 4: Cycle exists - numCourses = 2, prerequisites = [[1,0],[0,1]]
        // Expected: [] (empty array)
        int[][] prerequisites4 = {{1, 0}, {0, 1}};
        int[] result4 = solution.findOrder(2, prerequisites4);
        System.out.println("Test Case 4 (DFS): " + Arrays.toString(result4)); // Should print []
        
        int[] result4BFS = solution.findOrderBFS(2, prerequisites4);
        System.out.println("Test Case 4 (BFS): " + Arrays.toString(result4BFS)); // Should print []
        
        // Test Case 5: Self-loop
        // numCourses = 1, prerequisites = [[0,0]]
        // Expected: [] (empty array)
        int[][] prerequisites5 = {{0, 0}};
        int[] result5 = solution.findOrder(1, prerequisites5);
        System.out.println("Test Case 5 (DFS): " + Arrays.toString(result5)); // Should print []
        
        int[] result5BFS = solution.findOrderBFS(1, prerequisites5);
        System.out.println("Test Case 5 (BFS): " + Arrays.toString(result5BFS)); // Should print []
        
        System.out.println("\n=== Algorithm Explanation ===");
        System.out.println("This problem is topological sorting in a directed graph.");
        System.out.println("DFS Approach: Use DFS with cycle detection and build order in reverse post-order.");
        System.out.println("BFS Approach: Use Kahn's algorithm - start with nodes having in-degree 0.");
        System.out.println("If a cycle exists, it's impossible to complete all courses (return empty array).");
    }
}
