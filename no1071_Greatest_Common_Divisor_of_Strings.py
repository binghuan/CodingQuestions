"""
1071. Greatest Common Divisor of Strings

Given two strings str1 and str2, return the largest string x such that
both str1 and str2 are made of one or more concatenations of x.

Idea:
- If str1 + str2 != str2 + str1, no such base string exists -> return "".
- Otherwise, the answer length is gcd(len(str1), len(str2)); return str1[:g].

Time: O(n) to check concatenations, Space: O(1) extra.
"""

from math import gcd


class Solution:
	def gcdOfStrings(self, str1: str, str2: str) -> str:
		# If they don't share the same repeating pattern, no gcd string exists.
		if str1 + str2 != str2 + str1:
			return ""
		# Length of the gcd string is gcd of lengths.
		g = gcd(len(str1), len(str2))
		return str1[:g]


if __name__ == "__main__":
	tests = [
		("ABCABC", "ABC", "ABC"),
		("ABABAB", "ABAB", "AB"),
		("LEET", "CODE", ""),
		("AAAAAA", "AAA", "AAA"),
		("ABCABCABC", "ABCABC", "ABC"),
		("TAUXXTAUXXTAUXX", "TAUXXTAUXX", "TAUXX"),
		("ABAB", "ABBA", ""),
	]
	s = Solution()
	for i, (a, b, expected) in enumerate(tests, 1):
		got = s.gcdOfStrings(a, b)
		print(f"Case {i}: got='{got}', expected='{expected}'")


