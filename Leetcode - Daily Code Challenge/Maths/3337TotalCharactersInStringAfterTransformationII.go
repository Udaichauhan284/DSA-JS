// 3337. Total Characters in String After Transformation II14 May 2025, Leetcode POTD, Hard

package maths

const MOD int = 1e9 + 7
const SIZE = 26

// Multiply two 26x26 matrices
func matrixMultiplication(A, B [][]int) [][]int {
	result := make([][]int, SIZE)
	for i := 0; i < SIZE; i++ {
		result[i] = make([]int, SIZE)
		for j := 0; j < SIZE; j++ {
			for k := 0; k < SIZE; k++ {
				result[i][j] = (result[i][j] + A[i][k]*B[k][j]%MOD) % MOD
			}
		}
	}
	return result
}

// Exponentiate matrix to power `exp`
func matrixExponentiation(base [][]int, exp int) [][]int {
	// Create identity matrix
	result := make([][]int, SIZE)
	for i := 0; i < SIZE; i++ {
		result[i] = make([]int, SIZE)
		result[i][i] = 1
	}

	for exp > 0 {
		if exp%2 == 1 {
			result = matrixMultiplication(result, base)
		}
		base = matrixMultiplication(base, base)
		exp /= 2
	}
	return result
}

func lengthAfterTransformations(s string, t int, nums []int) int {
	// Frequency of each character in string
	freq := make([]int, SIZE)
	for _, ch := range s {
		freq[ch-'a']++
	}

	// Build transformation matrix T
	T := make([][]int, SIZE)
	for i := 0; i < SIZE; i++ {
		T[i] = make([]int, SIZE)
	}
	for i := 0; i < SIZE; i++ {
		for add := 1; add <= nums[i]; add++ {
			to := (i + add) % SIZE
			T[to][i]++
		}
	}

	// Matrix exponentiation: T^t
	Tpower := matrixExponentiation(T, t)

	// Apply matrix on freq vector
	updatedFreq := make([]int, SIZE)
	for i := 0; i < SIZE; i++ {
		for j := 0; j < SIZE; j++ {
			updatedFreq[i] = (updatedFreq[i] + Tpower[i][j]*freq[j]%MOD) % MOD
		}
	}

	// Sum all updated frequencies
	total := 0
	for _, val := range updatedFreq {
		total = (total + val) % MOD
	}

	return total
}