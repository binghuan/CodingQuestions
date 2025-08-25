package com.bh;

public class no0605_Can_Place_Flowers {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int count = 0;
        for (int i = 0; i < flowerbed.length; i++) {
            if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
                flowerbed[i] = 1;
                count++;
            }
            if (count >= n) {
                return true;
            }
        }
        return count >= n;
    }

    public static void main(String[] args) {
        no0605_Can_Place_Flowers solution = new no0605_Can_Place_Flowers();

        // Test case 1
        int[] flowerbed1 = {1, 0, 0, 0, 1};
        int n1 = 1;
        System.out.println("Test case 1: " + solution.canPlaceFlowers(flowerbed1, n1)); // Expected: true

        // Test case 2
        int[] flowerbed2 = {1, 0, 0, 0, 1};
        int n2 = 2;
        System.out.println("Test case 2: " + solution.canPlaceFlowers(flowerbed2, n2)); // Expected: false

        // Test case 3
        int[] flowerbed3 = {0, 0, 1, 0, 0};
        int n3 = 2;
        System.out.println("Test case 3: " + solution.canPlaceFlowers(flowerbed3, n3)); // Expected: true

        // Test case 4
        int[] flowerbed4 = {0};
        int n4 = 1;
        System.out.println("Test case 4: " + solution.canPlaceFlowers(flowerbed4, n4)); // Expected: true

        // Test case 5
        int[] flowerbed5 = {1};
        int n5 = 1;
        System.out.println("Test case 5: " + solution.canPlaceFlowers(flowerbed5, n5)); // Expected: false
    }
}
