// Fibonacci numbers in C++
// Provides both an iterative O(n) approach and a fast-doubling O(log n) approach.

#include <iostream>
#include <utility>
#include <stdexcept>

// Iterative Fibonacci: O(n) time, O(1) space.
// Returns F(n) with F(0)=0, F(1)=1.
unsigned long long fib_iter(unsigned int n) {
	if (n == 0) return 0ULL;
	if (n == 1) return 1ULL;
	unsigned long long a = 0ULL, b = 1ULL;
	for (unsigned int i = 2; i <= n; ++i) {
		unsigned long long c = a + b;
		a = b;
		b = c;
	}
	return b;
}

// Fast doubling method: O(log n)
// Returns pair{F(n), F(n+1)}
static std::pair<unsigned long long, unsigned long long> fib_doubling_pair(unsigned long long n) {
	if (n == 0) return {0ULL, 1ULL};
	const auto p = fib_doubling_pair(n >> 1);
	const unsigned long long a = p.first;   // F(k)
	const unsigned long long b = p.second;  // F(k+1)
	// c = F(2k) = F(k) * (2*F(k+1) - F(k))
	unsigned long long c = a * ((b << 1) - a);
	// d = F(2k+1) = F(k)^2 + F(k+1)^2
	unsigned long long d = a * a + b * b;
	if ((n & 1ULL) == 0ULL) return {c, d};
	else return {d, c + d};
}

unsigned long long fib_fast(unsigned long long n) {
	return fib_doubling_pair(n).first;
}

int main() {
	// Quick sanity checks
	std::cout << "F(0)  = " << fib_iter(0) << ", " << fib_fast(0) << "\n";
	std::cout << "F(1)  = " << fib_iter(1) << ", " << fib_fast(1) << "\n";
	std::cout << "F(2)  = " << fib_iter(2) << ", " << fib_fast(2) << "\n";
	std::cout << "F(5)  = " << fib_iter(5) << ", " << fib_fast(5) << "\n";  // 5
	std::cout << "F(10) = " << fib_iter(10) << ", " << fib_fast(10) << "\n"; // 55
	std::cout << "F(50) = " << fib_fast(50) << "\n";  // 12586269025

	// Example: read n from stdin (optional)
	// unsigned long long n; if (std::cin >> n) std::cout << fib_fast(n) << "\n";
	return 0;
}

