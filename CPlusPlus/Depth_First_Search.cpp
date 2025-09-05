//
// Created by binghuan on 2025/9/6.
// Simple DFS Demo
//

#include <iostream>
#include <vector>
#include <stack>
using namespace std;

class Graph {
private:
    int vertices;
    vector<vector<int> > adjList;

public:
    Graph(int v) : vertices(v) {
        adjList.resize(v);
    }

    // Add edge to the graph
    void addEdge(int u, int v) {
        adjList[u].push_back(v);
        adjList[v].push_back(u); // For undirected graph
    }

    // Recursive DFS
    void dfsRecursive(int start, vector<bool> &visited) {
        visited[start] = true;
        cout << start << " ";

        for (int neighbor: adjList[start]) {
            if (!visited[neighbor]) {
                dfsRecursive(neighbor, visited);
            }
        }
    }

    // Iterative DFS using stack
    void dfsIterative(int start) {
        vector<bool> visited(vertices, false);
        stack<int> stk;

        stk.push(start);
        cout << "DFS Iterative: ";

        while (!stk.empty()) {
            int current = stk.top();
            stk.pop();

            if (!visited[current]) {
                visited[current] = true;
                cout << current << " ";

                // Add neighbors to stack
                for (int neighbor: adjList[current]) {
                    if (!visited[neighbor]) {
                        stk.push(neighbor);
                    }
                }
            }
        }
        cout << endl;
    }
};

int main() {
    cout << "=== Simple DFS Demo ===" << endl;

    // Create a simple graph
    Graph g(5);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);

    cout << "Graph: 0-1-3, 0-2-4" << endl;

    // Test recursive DFS
    vector<bool> visited(5, false);
    cout << "DFS Recursive: ";
    g.dfsRecursive(0, visited);
    cout << endl;

    // Test iterative DFS
    g.dfsIterative(0);

    return 0;
}
