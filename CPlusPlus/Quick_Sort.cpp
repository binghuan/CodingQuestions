//
// Created by binghuan on 2025/9/6.
// Quick Sort Implementation
//

#include <iostream>
#include <vector>
#include <algorithm>
#include <random>
#include <chrono>
using namespace std;

class QuickSort {
public:
    // Main quick sort function
    void quickSort(vector<int>& nums) {
        quickSortHelper(nums, 0, nums.size() - 1);
    }

    // Quick sort with random pivot (better performance on sorted arrays)
    void quickSortRandom(vector<int>& nums) {
        quickSortRandomHelper(nums, 0, nums.size() - 1);
    }

    // Quick sort using Hoare partition scheme
    void quickSortHoare(vector<int>& nums) {
        quickSortHoareHelper(nums, 0, nums.size() - 1);
    }

private:
    // Helper function for standard quick sort (Lomuto partition)
    void quickSortHelper(vector<int>& nums, int low, int high) {
        if (low < high) {
            // Partition the array and get pivot index
            int pivotIndex = partition(nums, low, high);

            // Recursively sort left and right subarrays
            quickSortHelper(nums, low, pivotIndex - 1);
            quickSortHelper(nums, pivotIndex + 1, high);
        }
    }

    // Lomuto partition scheme
    int partition(vector<int>& nums, int low, int high) {
        // Choose rightmost element as pivot
        int pivot = nums[high];
        int i = low - 1;  // Index of smaller element

        for (int j = low; j < high; j++) {
            // If current element is smaller than or equal to pivot
            if (nums[j] <= pivot) {
                i++;
                swap(nums[i], nums[j]);
            }
        }

        // Place pivot in correct position
        swap(nums[i + 1], nums[high]);
        return i + 1;
    }

    // Helper function for random pivot quick sort
    void quickSortRandomHelper(vector<int>& nums, int low, int high) {
        if (low < high) {
            // Randomly choose pivot and swap with last element
            int randomIndex = low + rand() % (high - low + 1);
            swap(nums[randomIndex], nums[high]);

            int pivotIndex = partition(nums, low, high);

            quickSortRandomHelper(nums, low, pivotIndex - 1);
            quickSortRandomHelper(nums, pivotIndex + 1, high);
        }
    }

    // Helper function for Hoare partition quick sort
    void quickSortHoareHelper(vector<int>& nums, int low, int high) {
        if (low < high) {
            int pivotIndex = hoarePartition(nums, low, high);

            quickSortHoareHelper(nums, low, pivotIndex);
            quickSortHoareHelper(nums, pivotIndex + 1, high);
        }
    }

    // Hoare partition scheme
    int hoarePartition(vector<int>& nums, int low, int high) {
        int pivot = nums[low];  // Choose first element as pivot
        int i = low - 1;
        int j = high + 1;

        while (true) {
            // Find element on left that should be on right
            do {
                i++;
            } while (nums[i] < pivot);

            // Find element on right that should be on left
            do {
                j--;
            } while (nums[j] > pivot);

            // If elements crossed, partitioning is done
            if (i >= j) {
                return j;
            }

            swap(nums[i], nums[j]);
        }
    }
};

// Helper function to print array
void printArray(const vector<int>& nums, const string& title) {
    cout << title << ": [";
    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i];
        if (i < nums.size() - 1) cout << ", ";
    }
    cout << "]" << endl;
}

// Generate random array for testing
vector<int> generateRandomArray(int size, int minVal = 1, int maxVal = 100) {
    vector<int> arr;
    random_device rd;
    mt19937 gen(rd());
    uniform_int_distribution<> dis(minVal, maxVal);

    for (int i = 0; i < size; i++) {
        arr.push_back(dis(gen));
    }
    return arr;
}

// Check if array is sorted
bool isSorted(const vector<int>& nums) {
    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] < nums[i - 1]) {
            return false;
        }
    }
    return true;
}

int main() {
    QuickSort qs;

    cout << "=== Quick Sort Implementation ===" << endl << endl;

    // Test case 1: Basic array
    cout << "Test 1: Basic Array" << endl;
    vector<int> nums1 = {64, 34, 25, 12, 22, 11, 90};
    printArray(nums1, "Original");

    vector<int> nums1_copy = nums1;
    qs.quickSort(nums1_copy);
    printArray(nums1_copy, "Sorted (Lomuto)");
    cout << "Is sorted: " << (isSorted(nums1_copy) ? "Yes" : "No") << endl << endl;

    // Test case 2: Already sorted array
    cout << "Test 2: Already Sorted Array" << endl;
    vector<int> nums2 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    printArray(nums2, "Original");

    vector<int> nums2_copy = nums2;
    qs.quickSortRandom(nums2_copy);
    printArray(nums2_copy, "Sorted (Random Pivot)");
    cout << "Is sorted: " << (isSorted(nums2_copy) ? "Yes" : "No") << endl << endl;

    // Test case 3: Reverse sorted array
    cout << "Test 3: Reverse Sorted Array" << endl;
    vector<int> nums3 = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    printArray(nums3, "Original");

    vector<int> nums3_copy = nums3;
    qs.quickSortHoare(nums3_copy);
    printArray(nums3_copy, "Sorted (Hoare Partition)");
    cout << "Is sorted: " << (isSorted(nums3_copy) ? "Yes" : "No") << endl << endl;

    // Test case 4: Array with duplicates
    cout << "Test 4: Array with Duplicates" << endl;
    vector<int> nums4 = {5, 2, 8, 2, 9, 1, 5, 5, 2};
    printArray(nums4, "Original");

    vector<int> nums4_copy = nums4;
    qs.quickSort(nums4_copy);
    printArray(nums4_copy, "Sorted");
    cout << "Is sorted: " << (isSorted(nums4_copy) ? "Yes" : "No") << endl << endl;

    // Test case 5: Single element
    cout << "Test 5: Single Element" << endl;
    vector<int> nums5 = {42};
    printArray(nums5, "Original");

    vector<int> nums5_copy = nums5;
    qs.quickSort(nums5_copy);
    printArray(nums5_copy, "Sorted");
    cout << "Is sorted: " << (isSorted(nums5_copy) ? "Yes" : "No") << endl << endl;

    // Test case 6: Empty array
    cout << "Test 6: Empty Array" << endl;
    vector<int> nums6 = {};
    printArray(nums6, "Original");

    vector<int> nums6_copy = nums6;
    qs.quickSort(nums6_copy);
    printArray(nums6_copy, "Sorted");
    cout << "Is sorted: " << (isSorted(nums6_copy) ? "Yes" : "No") << endl << endl;

    // Performance test with random data
    cout << "=== Performance Test ===" << endl;
    vector<int> randomArray = generateRandomArray(20);
    printArray(randomArray, "Random Array");

    // Test different algorithms
    vector<int> test1 = randomArray, test2 = randomArray, test3 = randomArray;

    auto start = chrono::high_resolution_clock::now();
    qs.quickSort(test1);
    auto end = chrono::high_resolution_clock::now();
    auto duration1 = chrono::duration_cast<chrono::microseconds>(end - start);

    start = chrono::high_resolution_clock::now();
    qs.quickSortRandom(test2);
    end = chrono::high_resolution_clock::now();
    auto duration2 = chrono::duration_cast<chrono::microseconds>(end - start);

    start = chrono::high_resolution_clock::now();
    qs.quickSortHoare(test3);
    end = chrono::high_resolution_clock::now();
    auto duration3 = chrono::duration_cast<chrono::microseconds>(end - start);

    printArray(test1, "Lomuto Result");
    cout << "Lomuto Partition: " << duration1.count() << " microseconds" << endl;
    cout << "Random Pivot: " << duration2.count() << " microseconds" << endl;
    cout << "Hoare Partition: " << duration3.count() << " microseconds" << endl << endl;

    cout << "=== Algorithm Analysis ===" << endl;
    cout << "Time Complexity:" << endl;
    cout << "- Best Case: O(n log n)" << endl;
    cout << "- Average Case: O(n log n)" << endl;
    cout << "- Worst Case: O(n²) - when pivot is always smallest/largest" << endl;
    cout << "Space Complexity: O(log n) - recursion stack" << endl << endl;

    cout << "Partition Schemes:" << endl;
    cout << "1. Lomuto: Simpler to understand, always chooses last element as pivot" << endl;
    cout << "2. Hoare: More efficient, fewer swaps, original partition scheme" << endl;
    cout << "3. Random Pivot: Better performance on already sorted arrays" << endl;

    return 0;
}
