// solution #1
function removeDuplicates(nums) {
  const filterredArr = nums.filter((v, i, self) => self.indexOf(v) === i);

  return filterredArr;
}

// solution #2
function removeDuplicates2(nums) {
  const set = new Set(nums);

  return [...set];
}

// output
console.log(removeDuplicates([1, 1, 2])); // [1, 2]
console.log(removeDuplicates2([1, 1, 2])); // [1, 2]
