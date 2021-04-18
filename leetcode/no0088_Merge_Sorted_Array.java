import java.util.ArrayList;
import java.util.Arrays;

class Solution {

    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int indexB = 0;
        ArrayList<Integer> result = new ArrayList<Integer>();
        for (int i = 0; i < m; i++) {

            int numA = nums1[i];
            boolean hit = false;
            for (int j = indexB; j < nums2.length; j++) {
                int numB = nums2[j];
                if (numA > numB) {
                    hit = true;
                    result.add(numB);
                    indexB += 1;
                    i -= 1;
                    break;
                }
            }

            if (!hit) {
                result.add(numA);
            }
        }

        if (indexB < n) {
            for (int j = indexB; j < nums2.length; j++) {
                int numB = nums2[j];
                result.add(numB);
            }
        }

        for (int i = 0; i < result.size(); i++) {
            nums1[i] = result.get(i);
        }
    }

}

class Main {
    public static void main(String[] args) {
        int[] nums1 = { 1, 2, 3, 0, 0, 0 };
        int[] nums2 = { 2, 5, 6 };

        System.out.println("nums1:" + Arrays.toString(nums1));
        System.out.println("nums2:" + Arrays.toString(nums2));
        Solution s = new Solution();
        s.merge(nums1, 3, nums2, 3);
        System.out.println("answer:" + Arrays.toString(nums1));
    }
}
