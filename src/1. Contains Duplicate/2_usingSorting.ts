function containsDuplicate(nums: number[]): boolean {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
}

containsDuplicate([1, 2, 3, 1]);
