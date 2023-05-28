/** TwoSum
 * If there is a sum for the target return their indexex, only one solution and can't be with itself
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const counts = nums.reduce((acc, value) => ({ // count repeated elements of the array {'n':count}
		...acc,
		[value]: (acc[value] || 0) + 1
	}), {});
	const complements = nums.map(n => target-n) // array of the complements number for the sum
	const numsStr = nums.map(n => n.toString()) // nums parsed to string
	let indexes = nums.map((num, i) =>
		//if nums includes complement AND (num is not the same as complemen OR there is repetead value) return index, else return undefinde)
		nums.includes(target - num) && (nums[i] !== complements[i] || counts[numsStr[i]] > 1) ? i : undefined)
		.filter((a) => Number.isInteger(a)) //Return only the integers
	return indexes
}
