//
// Created by binghuan on 2025/9/4.
//

#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <unordered_set>
#include <stdexcept>
using namespace std;

// Simple directed graph (can be used as undirected by adding both edges)
class Graph {
public:
    // adjacency list: node -> neighbors
    unordered_map<int, vector<int>> adj;

    void addEdge(int u, int v, bool undirected = false) {
        adj[u].push_back(v);
        // ensure nodes exist even if they have no outgoing edges later
        if (!adj.count(v)) adj[v] = {};
        if (undirected) {
            adj[v].push_back(u);
        }
    }

    // Breadth-First Search starting from 'start'. Returns visitation order.
    vector<int> bfs(int start) const {
        if (!adj.count(start)) {
            return {}; // start not present
        }
        vector<int> order;
        unordered_set<int> visited;
        queue<int> q;
        visited.insert(start);
        q.push(start);
        while (!q.empty()) {
            int node = q.front(); q.pop();
            order.push_back(node);
            auto it = adj.find(node);
            if (it != adj.end()) {
                for (int nei : it->second) {
                    if (!visited.count(nei)) {
                        visited.insert(nei);
                        q.push(nei);
                    }
                }
            }
        }
        return order;
    }

    // BFS returning shortest distance from start to every reachable node.
    unordered_map<int,int> bfsDistances(int start) const {
        unordered_map<int,int> dist;
        if (!adj.count(start)) return dist;
        queue<int> q;
        q.push(start);
        dist[start] = 0;
        while (!q.empty()) {
            int u = q.front(); q.pop();
            for (int v : adj.at(u)) {
                if (!dist.count(v)) {
                    dist[v] = dist[u] + 1;
                    q.push(v);
                }
            }
        }
        return dist;
    }
};

static void printVec(const vector<int>& v) {
    cout << "[";
    for (size_t i = 0; i < v.size(); ++i) {
        cout << v[i] << (i + 1 == v.size() ? "" : ",");
    }
    cout << "]" << endl;
}

static void printDist(const unordered_map<int,int>& d) {
    cout << "{";
    bool first = true;
    for (auto &p : d) {
        if (!first) cout << ","; first = false;
        cout << p.first << ":" << p.second;
    }
    cout << "}" << endl;
}

int main() {
    cout << "BFS Tests" << endl;

    // Test 1: Simple undirected connected graph
    // 0 -- 1 -- 2
    //  |    \
    //  3     4
    Graph g1;
    g1.addEdge(0,1,true);
    g1.addEdge(1,2,true);
    g1.addEdge(0,3,true);
    g1.addEdge(1,4,true);
    auto order1 = g1.bfs(0);
    cout << "Test1 BFS order from 0: "; printVec(order1);
    auto dist1 = g1.bfsDistances(0);
    cout << "Test1 distances from 0: "; printDist(dist1);

    // Test 2: Directed graph with a cycle
    // 5 -> 6 -> 7 -> 5, 7 -> 8
    Graph g2;
    g2.addEdge(5,6);
    g2.addEdge(6,7);
    g2.addEdge(7,5);
    g2.addEdge(7,8);
    auto order2 = g2.bfs(5);
    cout << "Test2 BFS order from 5: "; printVec(order2);
    auto dist2 = g2.bfsDistances(5);
    cout << "Test2 distances from 5: "; printDist(dist2);

    // Test 3: Disconnected graph (start in isolated component)
    Graph g3;
    g3.addEdge(10,11,true);
    g3.addEdge(12,13,true); // separate component
    auto order3 = g3.bfs(10);
    cout << "Test3 BFS order from 10: "; printVec(order3); // should not include 12,13
    auto dist3 = g3.bfsDistances(10);
    cout << "Test3 distances from 10: "; printDist(dist3);

    // Test 4: Start node absent
    Graph g4;
    g4.addEdge(1,2);
    auto order4 = g4.bfs(99);
    cout << "Test4 BFS order from 99 (missing): "; printVec(order4); // []

    // Test 5: Single node no edges
    Graph g5;
    g5.addEdge(42,42); // self-loop
    auto order5 = g5.bfs(42);
    cout << "Test5 BFS order from 42: "; printVec(order5);
    auto dist5 = g5.bfsDistances(42);
    cout << "Test5 distances from 42: "; printDist(dist5);

    return 0;
}
