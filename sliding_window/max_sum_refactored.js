function maxSubarraySum(arr, lengthOfSubArray) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < lengthOfSubArray) {
    return null;
  }

  for (let i = 0; i < lengthOfSubArray; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = lengthOfSubArray; i < arr.length; i++) {
    tempSum = tempSum - arr[i - lengthOfSubArray] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
