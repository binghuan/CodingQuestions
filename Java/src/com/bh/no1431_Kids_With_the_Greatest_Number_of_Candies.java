package com.bh;

import java.util.ArrayList;
import java.util.List;

public class no1431_Kids_With_the_Greatest_Number_of_Candies {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        // Find the maximum number of candies any kid currently has
        int maxCandies = 0;
        for (int candy : candies) {
            if (candy > maxCandies) {
                maxCandies = candy;
            }
        }

        // Create a result list to store whether each kid can have the greatest number of candies
        List<Boolean> result = new ArrayList<>();
        for (int candy : candies) {
            // Check if the current kid's candies plus extraCandies is greater than or equal to maxCandies
            result.add(candy + extraCandies >= maxCandies);
        }

        return result;
    }

    public static void main(String[] args) {
        no1431_Kids_With_the_Greatest_Number_of_Candies solution = new no1431_Kids_With_the_Greatest_Number_of_Candies();

        // Test case 1
        int[] candies1 = {2, 3, 5, 1, 3};
        int extraCandies1 = 3;
        System.out.println(solution.kidsWithCandies(candies1, extraCandies1)); // Expected: [true, true, true, false, true]

        // Test case 2
        int[] candies2 = {4, 2, 1, 1, 2};
        int extraCandies2 = 1;
        System.out.println(solution.kidsWithCandies(candies2, extraCandies2)); // Expected: [true, false, false, false, false]

        // Test case 3
        int[] candies3 = {12, 1, 12};
        int extraCandies3 = 10;
        System.out.println(solution.kidsWithCandies(candies3, extraCandies3)); // Expected: [true, false, true]
    }
}
