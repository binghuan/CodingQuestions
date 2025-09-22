package com.bh;

import java.util.*;
// Coding question from Employment Hero

public class MaxPackagesOnShelf {

    class Solution {
        public int solution(int[] client) {
            return solutionWithDebug(client, false);
        }

        public int solutionWithDebug(int[] client, boolean debug) {
            int n = client.length;
            boolean[] onShelf = new boolean[n + 1]; // Mark which packages are on the shelf
            int maxShelf = 0;
            int shelfCount = 0;
            int clientIndex = 0;        // Current position in the client queue

            if (debug) {
                System.out.println("=== Package Delivery Simulation ===");
                System.out.println("Client queue: " + Arrays.toString(client));
                System.out.println("Packages will arrive in order: 1, 2, 3, ..., " + n);
                System.out.println();
            }

            for (int pkg = 1; pkg <= n; pkg++) {
                if (debug) {
                    System.out.println("📦 Package " + pkg + " arrives");
                    System.out.println("👤 Current client (position " + clientIndex + ") wants package " + client[clientIndex]);
                }

                if (client[clientIndex] == pkg) {
                    // Current client's desired package has arrived
                    if (debug) {
                        System.out.println("✅ Client " + clientIndex + " picks up package " + pkg + " (their desired package)");
                    }
                    clientIndex++;

                    // Check if subsequent clients can pick up packages from the shelf
                    while (clientIndex < n && onShelf[client[clientIndex]]) {
                        int pickedPackage = client[clientIndex];
                        onShelf[pickedPackage] = false;
                        shelfCount--;
                        if (debug) {
                            System.out.println("✅ Client " + clientIndex + " also picks up package " + pickedPackage + " from shelf");
                            System.out.println("📚 Shelf count: " + shelfCount + " packages");
                        }
                        clientIndex++;
                    }

                    if (debug && clientIndex < n) {
                        System.out.println("👤 Next client (position " + clientIndex + ") wants package " + client[clientIndex]);
                    } else if (debug && clientIndex >= n) {
                        System.out.println("🎉 All clients have been served!");
                    }
                } else {
                    // Not the current client's desired package, put it on the shelf
                    onShelf[pkg] = true;
                    shelfCount++;
                    maxShelf = Math.max(maxShelf, shelfCount);
                    if (debug) {
                        System.out.println("📚 Package " + pkg + " goes to shelf (client wants " + client[clientIndex] + ")");
                        System.out.println("📚 Shelf count: " + shelfCount + " packages (Max so far: " + maxShelf + ")");

                        // Show which packages are currently on the shelf
                        List<Integer> packagesOnShelf = new ArrayList<>();
                        for (int i = 1; i <= n; i++) {
                            if (onShelf[i]) {
                                packagesOnShelf.add(i);
                            }
                        }
                        System.out.println("📚 Packages on shelf: " + packagesOnShelf);
                    }
                }

                if (debug) {
                    System.out.println();
                }
            }

            if (debug) {
                System.out.println("🏁 Final result: Maximum packages on shelf = " + maxShelf);
                System.out.println("=====================================");
            }

            return maxShelf;
        }
    }

    public static void main(String[] args) {
        MaxPackagesOnShelf obj = new MaxPackagesOnShelf();
        Solution solution = obj.new Solution();

        // Test Case 1: client = [3, 2, 4, 5, 1], expected result = 2
        int[] client1 = {3, 2, 4, 5, 1};
        System.out.println("Test Case 1: " + Arrays.toString(client1));
        int result1 = solution.solutionWithDebug(client1, true);
        System.out.println("Expected: 2");
        System.out.println("Result: " + (result1 == 2 ? "PASS" : "FAIL"));
        System.out.println("\n" + "=".repeat(50) + "\n");

        // Test Case 2: client = [1, 2, 3, 4, 5], expected result = 0
        int[] client2 = {1, 2, 3, 4, 5};
        System.out.println("Test Case 2: " + Arrays.toString(client2));
        int result2 = solution.solutionWithDebug(client2, true);
        System.out.println("Expected: 0 (packages arrive in order)");
        System.out.println("Result: " + (result2 == 0 ? "PASS" : "FAIL"));
        System.out.println("\n" + "=".repeat(50) + "\n");

        // Test Case 3: client = [5, 4, 3, 2, 1], expected result = 4
        int[] client3 = {5, 4, 3, 2, 1};
        System.out.println("Test Case 3: " + Arrays.toString(client3));
        int result3 = solution.solutionWithDebug(client3, true);
        System.out.println("Expected: 4 (worst case - all packages except the last one)");
        System.out.println("Result: " + (result3 == 4 ? "PASS" : "FAIL"));

        System.out.println("\n=== Algorithm Explanation ===");
        System.out.println("This problem simulates a package delivery system where:");
        System.out.println("1. Packages arrive in order 1, 2, 3, ..., N");
        System.out.println("2. Clients wait in line with specific package numbers they want");
        System.out.println("3. Only the first client in line can pick up their package");
        System.out.println("4. If a package arrives but the first client doesn't want it, it goes on the shelf");
        System.out.println("5. When the first client's package arrives, they pick it up and may also pick up");
        System.out.println("   any packages from the shelf that subsequent clients in line want");
        System.out.println("6. Goal: Find the maximum number of packages on the shelf at any time");
    }
}
