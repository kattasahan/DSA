function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        console.log(nums[i] + " - " + nums[j]);
        return true;
      }
    }
  }
  return false;
}

containsDuplicate([1, 2, 3, 1]);
