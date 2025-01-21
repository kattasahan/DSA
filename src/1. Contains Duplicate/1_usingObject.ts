function containsDuplicate(nums: number[]): boolean {
  const dict: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]]) {
      return true;
    } else {
      dict[nums[i]] = 1;
    }
  }
  return false;
}

containsDuplicate([1, 2, 3, 1]);
