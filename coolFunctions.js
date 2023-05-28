// We map the num and his position, if  includes the target - num (sum for tarjet) return i else undefinded, then we filter only integers
const twoSum = (nums, target) =>  nums.map((num, i) => nums.includes(target - num) ? i : undefined).filter((a) => Number.isInteger(a))
