//
// Created by binghuan on 2025/9/9.
//

#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdlib>   // rand()
#include <ctime>     // time()
#include <cstdio>
using namespace std;

vector<vector<int> > generateSample(int N) {
    srand((unsigned) time(NULL)); // Random seed
    vector<vector<int> > lists;
    lists.reserve(N);

    printf("[GEN] Generating %d lists\n", N);
    for (int i = 0; i < N; ++i) {
        // 1. Determine list length: 4 ~ 100
        int len = 4 + rand() % (100 - 4 + 1);
        printf("[LIST %d] length = %d\n", i, len);

        vector<int> cur;
        cur.reserve(len);

        // 2. Fill with random numbers: -999 ~ 999
        for (int j = 0; j < len; ++j) {
            int val = -999 + rand() % (999 - (-999) + 1);
            cur.push_back(val);
        }

        // 3. Sort in ascending order
        sort(cur.begin(), cur.end());

        // 4. Output this list
        printf("  Values: ");
        for (int v: cur) printf("%d ", v);
        printf("\n");

        lists.push_back(cur);
    }

    printf("[GEN] Done!\n");
    return lists;
}

int main() {
    int N = 3; // You can change this to any number >= 3
    vector<vector<int> > sample = generateSample(N);

    printf("\n[FINAL SAMPLE]\n");
    for (int i = 0; i < (int) sample.size(); ++i) {
        printf("List %d: [", i);
        for (size_t j = 0; j < sample[i].size(); ++j) {
            printf("%d%s", sample[i][j], (j + 1 == sample[i].size() ? "" : ","));
        }
        printf("]\n");
    }

    return 0;
}
