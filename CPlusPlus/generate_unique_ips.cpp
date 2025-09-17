//
// Created by binghuan on 2025/9/17.
//
#include <iostream>        // Input/output functionality
#include <random>          // C++11 random number generator
#include <set>             // Set container for automatic deduplication
#include <sstream>         // String stream for string assembly
using namespace std; // Use std namespace to avoid writing std:: every time

// Global random number generator and distribution
random_device rd; // Hardware random seed
mt19937 gen(rd()); // Mersenne Twister random number generator
uniform_int_distribution<> dist(0, 255); // Uniform distribution 0-255

string generateIP() {
    // Generate an IPv4 string
    stringstream ss; // String stream for assembling IP address
    ss << dist(gen) << "." // First segment 0~255
            << dist(gen) << "." // Second segment 0~255
            << dist(gen) << "." // Third segment 0~255
            << dist(gen); // Fourth segment 0~255
    return ss.str(); // Return complete IPv4 string
}

int main() {
    set<string> ipSet; // Use set to store IPs and avoid duplicates

    while (ipSet.size() < 50) {
        // Until we collect 50 unique IPs
        ipSet.insert(generateIP()); // Insert newly generated IP, duplicates will be automatically ignored
    }

    for (const auto &ip: ipSet) {
        // Iterate through all IPs in the set
        cout << ip << endl; // Output IP, one per line
    }

    return 0; // Normal program termination
}
