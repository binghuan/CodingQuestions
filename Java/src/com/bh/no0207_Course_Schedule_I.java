package com.bh;

import java.util.*;

/**
 * LeetCode 207: Course Schedule
 * 
 * Problem: There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take 
 * course bi first if you want to take course ai.
 * 
 * Return true if you can finish all courses. Otherwise, return false.
 * 
 * This is essentially a cycle detection problem in a directed graph.
 * If there's a cycle in the prerequisites, it's impossible to finish all courses.
 */
public class no0207_Course_Schedule_I {

    /**
     * Solution 1: DFS with Cycle Detection using Colors
     * 
     * We use three states for each node:
     * - WHITE (0): Unvisited
     * - GRAY (1): Currently visiting (in the current path)
     * - BLACK (2): Completely processed
     * 
     * If we encounter a GRAY node during DFS, we found a back edge (cycle).
     * 
     * Time Complexity: O(V + E) where V = numCourses, E = prerequisites.length
     * Space Complexity: O(V + E) for adjacency list and recursion stack
     */
    public boolean canFinish(int numCourses, int[][] prerequisites) {
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
        
        // Check each course for cycles
        for (int i = 0; i < numCourses; i++) {
            if (color[i] == 0) { // If unvisited
                if (hasCycle(graph, color, i)) {
                    return false; // Cycle detected
                }
            }
        }
        
        return true; // No cycle found
    }
    
    /**
     * DFS helper method to detect cycle
     * Returns true if cycle is detected starting from node 'course'
     */
    private boolean hasCycle(List<List<Integer>> graph, int[] color, int course) {
        // Mark current node as GRAY (currently visiting)
        color[course] = 1;
        
        // Visit all neighbors
        for (int neighbor : graph.get(course)) {
            if (color[neighbor] == 1) {
                // Found a back edge (cycle)
                return true;
            }
            if (color[neighbor] == 0 && hasCycle(graph, color, neighbor)) {
                // Recursively check unvisited neighbors
                return true;
            }
        }
        
        // Mark current node as BLACK (completely processed)
        color[course] = 2;
        return false;
    }
    
    /**
     * Solution 2: BFS with Topological Sort (Kahn's Algorithm)
     * 
     * The idea is to use topological sorting. If we can sort all nodes topologically,
     * then there's no cycle. Otherwise, there's a cycle.
     * 
     * Time Complexity: O(V + E)
     * Space Complexity: O(V + E)
     */
    public boolean canFinishBFS(int numCourses, int[][] prerequisites) {
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
        
        int processedCourses = 0;
        
        // Process nodes with in-degree 0
        while (!queue.isEmpty()) {
            int course = queue.poll();
            processedCourses++;
            
            // Remove this course and update in-degrees of dependent courses
            for (int dependentCourse : graph.get(course)) {
                inDegree[dependentCourse]--;
                if (inDegree[dependentCourse] == 0) {
                    queue.offer(dependentCourse);
                }
            }
        }
        
        // If we processed all courses, there's no cycle
        return processedCourses == numCourses;
    }
    
    public static void main(String[] args) {
        no0207_Course_Schedule_I solution = new no0207_Course_Schedule_I();
        
        // Test Case 1: numCourses = 2, prerequisites = [[1,0]]
        // Expected: true
        int[][] prerequisites1 = {{1, 0}};
        boolean result1 = solution.canFinish(2, prerequisites1);
        System.out.println("Test Case 1 (DFS): " + result1); // Should print true
        
        boolean result1BFS = solution.canFinishBFS(2, prerequisites1);
        System.out.println("Test Case 1 (BFS): " + result1BFS); // Should print true
        
        // Test Case 2: numCourses = 2, prerequisites = [[1,0],[0,1]]
        // Expected: false (cycle exists)
        int[][] prerequisites2 = {{1, 0}, {0, 1}};
        boolean result2 = solution.canFinish(2, prerequisites2);
        System.out.println("Test Case 2 (DFS): " + result2); // Should print false
        
        boolean result2BFS = solution.canFinishBFS(2, prerequisites2);
        System.out.println("Test Case 2 (BFS): " + result2BFS); // Should print false
        
        // Test Case 3: More complex case
        // numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
        // Expected: true (0 -> 1 -> 3, 0 -> 2 -> 3)
        int[][] prerequisites3 = {{1, 0}, {2, 0}, {3, 1}, {3, 2}};
        boolean result3 = solution.canFinish(4, prerequisites3);
        System.out.println("Test Case 3 (DFS): " + result3); // Should print true
        
        boolean result3BFS = solution.canFinishBFS(4, prerequisites3);
        System.out.println("Test Case 3 (BFS): " + result3BFS); // Should print true
        
        // Test Case 4: Self-loop
        // numCourses = 1, prerequisites = [[0,0]]
        // Expected: false (self-loop)
        int[][] prerequisites4 = {{0, 0}};
        boolean result4 = solution.canFinish(1, prerequisites4);
        System.out.println("Test Case 4 (DFS): " + result4); // Should print false
        
        boolean result4BFS = solution.canFinishBFS(1, prerequisites4);
        System.out.println("Test Case 4 (BFS): " + result4BFS); // Should print false
        
        System.out.println("\n=== Algorithm Explanation ===");
        System.out.println("This problem is essentially cycle detection in a directed graph.");
        System.out.println("DFS Approach: Use 3-color DFS to detect back edges (cycles).");
        System.out.println("BFS Approach: Use Kahn's algorithm for topological sorting.");
        System.out.println("If all nodes can be topologically sorted, no cycle exists.");
    }
}
