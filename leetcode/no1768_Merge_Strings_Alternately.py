class Solution:
	def mergeAlternately(self, word1: str, word2: str) -> str:
		i, j = 0, 0
		out = []
		# Append alternately while either string has characters left
		while i < len(word1) or j < len(word2):
			if i < len(word1):
				out.append(word1[i])
				i += 1
			if j < len(word2):
				out.append(word2[j])
				j += 1
		return "".join(out)


if __name__ == "__main__":
	s = Solution()
	# Example tests
	print(s.mergeAlternately("abc", "pqr"))   # apbqcr
	print(s.mergeAlternately("ab", "pqrs"))   # apbqrs
	print(s.mergeAlternately("abcd", "pq"))   # apbqcd

