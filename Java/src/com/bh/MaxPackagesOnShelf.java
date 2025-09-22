package com.bh;
import java.util.*;


public class MaxPackagesOnShelf {

    class Solution {
        public int solution(int[] client) {
            int n = client.length;
            boolean[] onShelf = new boolean[n + 1]; // 標記哪些包裹在貨架上
            int maxShelf = 0;
            int shelfCount = 0;
            int nextNeeded = client[0]; // 下一個顧客需要的包裹
            int clientIndex = 0;        // 當前隊伍的索引

            for (int pkg = 1; pkg <= n; pkg++) {
                if (client[clientIndex] == pkg) {
                    // 當前顧客要的包裹到達
                    clientIndex++;
                    // 檢查貨架上是否有後續顧客要的包裹
                    while (clientIndex < n && onShelf[client[clientIndex]]) {
                        onShelf[client[clientIndex]] = false;
                        shelfCount--;
                        clientIndex++;
                    }
                } else {
                    // 不是當前顧客要的，放到貨架上
                    onShelf[pkg] = true;
                    shelfCount++;
                    maxShelf = Math.max(maxShelf, shelfCount);
                }
            }
            return maxShelf;
        }
    }

    public static void main(String[] args) {
        MaxPackagesOnShelf obj = new MaxPackagesOnShelf();
        Solution solution = obj.new Solution();

        // Test Case 1: client = [3, 2, 4, 5, 1], expected result = 2
        int[] client1 = {3, 2, 4, 5, 1};
        int result1 = solution.solution(client1);
        System.out.println("Test Case 1:");
        System.out.println("Client array: " + Arrays.toString(client1));
        System.out.println("Maximum packages on shelf: " + result1);
        System.out.println("Expected: 2");
        System.out.println("Result: " + (result1 == 2 ? "PASS" : "FAIL"));
        System.out.println();

        // Test Case 2: client = [1, 2, 3, 4, 5], expected result = 0
        int[] client2 = {1, 2, 3, 4, 5};
        int result2 = solution.solution(client2);
        System.out.println("Test Case 2:");
        System.out.println("Client array: " + Arrays.toString(client2));
        System.out.println("Maximum packages on shelf: " + result2);
        System.out.println("Expected: 0 (packages arrive in order)");
        System.out.println("Result: " + (result2 == 0 ? "PASS" : "FAIL"));
        System.out.println();

        // Test Case 3: client = [3, 2, 7, 5, 4, 1, 6], expected result = 4
        int[] client3 = {3, 2, 7, 5, 4, 1, 6};
        int result3 = solution.solution(client3);
        System.out.println("Test Case 3:");
        System.out.println("Client array: " + Arrays.toString(client3));
        System.out.println("Maximum packages on shelf: " + result3);
        System.out.println("Expected: 4");
        System.out.println("Result: " + (result3 == 4 ? "PASS" : "FAIL"));
        System.out.println();

        // Test Case 4: Single client
        int[] client4 = {1};
        int result4 = solution.solution(client4);
        System.out.println("Test Case 4:");
        System.out.println("Client array: " + Arrays.toString(client4));
        System.out.println("Maximum packages on shelf: " + result4);
        System.out.println("Expected: 0 (only one package, picked up immediately)");
        System.out.println("Result: " + (result4 == 0 ? "PASS" : "FAIL"));
        System.out.println();

        // Test Case 5: Reverse order
        int[] client5 = {5, 4, 3, 2, 1};
        int result5 = solution.solution(client5);
        System.out.println("Test Case 5:");
        System.out.println("Client array: " + Arrays.toString(client5));
        System.out.println("Maximum packages on shelf: " + result5);
        System.out.println("Expected: 4 (worst case - all packages except the last one)");
        System.out.println("Result: " + (result5 == 4 ? "PASS" : "FAIL"));

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
