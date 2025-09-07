//
// Created by binghuan on 2025/9/6.
// Simple Quick Sort Demonstration
//

#include <iostream>
#include <vector>
using namespace std;

// Function declarations
int partition(vector<int>& nums, int low, int high);
void quickSort(vector<int>& nums, int low, int high);

// Simple Quick Sort implementation
void quickSort(vector<int>& nums, int low, int high) {
    if (low < high) {
        // Partition and get pivot index
        int pivotIndex = partition(nums, low, high);

        // Recursively sort left and right parts
        quickSort(nums, low, pivotIndex - 1);
        quickSort(nums, pivotIndex + 1, high);
    }
}

// Partition function (Lomuto scheme)
int partition(vector<int>& nums, int low, int high) {
    int pivot = nums[high];  // Choose last element as pivot
    int i = low - 1;         // Index for smaller elements

    for (int j = low; j < high; j++) {
        if (nums[j] <= pivot) {
            i++;
            swap(nums[i], nums[j]);
        }
    }

    swap(nums[i + 1], nums[high]);  // Place pivot in correct position
    return i + 1;
}

// Helper function to print array
void printArray(const vector<int>& nums) {
    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i];
        if (i < nums.size() - 1) cout << " ";
    }
    cout << endl;
}

int main() {
    cout << "=== Simple Quick Sort Demo ===" << endl;

    // Test case 1: Basic array
    vector<int> nums1 = {64, 34, 25, 12, 22, 11, 90};
    cout << "Original: ";
    printArray(nums1);

    quickSort(nums1, 0, nums1.size() - 1);
    cout << "Sorted:   ";
    printArray(nums1);
    cout << endl;

    // Test case 2: Small array
    vector<int> nums2 = {5, 2, 8, 1, 9};
    cout << "Original: ";
    printArray(nums2);

    quickSort(nums2, 0, nums2.size() - 1);
    cout << "Sorted:   ";
    printArray(nums2);
    cout << endl;

    // Test case 3: Already sorted
    vector<int> nums3 = {1, 2, 3, 4, 5};
    cout << "Original: ";
    printArray(nums3);

    quickSort(nums3, 0, nums3.size() - 1);
    cout << "Sorted:   ";
    printArray(nums3);

    return 0;
}
