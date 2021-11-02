/**
 *
 * @param {*} arr
 * @returns
 * Maximum Subarray Problem
 * The maximum subarray problem is the task of finding the largest possible
 * sum of a contiguous subarray, within a given one-dimensional array A[1…n] of numbers.
 * For example, for the array given above, the contiguous subarray with the largest
 * sum is [4, -1, 2, 1], with sum 6. We would use this array as our example for
 * the rest of this article. Also, we would assume this array to be zero-indexed,
 * i.e. -2 would be called as the ‘0th’ element of the array and so on. Also,
 * A[i] would represent the value at index i.
 */

// kadane's algorithm
function kadanesAlgorithm(arr) {
  let max = arr[0];
  let maxEndingHere = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    max = Math.max(max, maxEndingHere);
  }
  return max;
}
