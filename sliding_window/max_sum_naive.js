function maxSubarraySum(arr, lengthOfSubArray) {
  if (lengthOfSubArray > arr.length) {
    return null;
  }
  
  let max = -Infinity;
  for (let i = 0; i < arr.length - lengthOfSubArray + 1; i++) {
    temp = 0;
    for (let j = 0; j < lengthOfSubArray; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
