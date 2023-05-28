/**
 * 最长递增子序列
 * @param {Array} nums 整数数组
 * @returns {number} 返回子序列长度
 */
function theLongestIncQue(nums) {
	if(!Array.isArray(nums)) {
		return console.log('请输入数组')
	}
	let ret = [], max = -1, count = 0, temp = []
	function judge(arr, num) {
		let len = arr.length
		if(len < 2) {
			return false
		}
		let last = arr[len - 1]
		let sLast = arr[len - 2]
		return num < last && num > sLast
	}
	for(let i = 0, len = nums.length; i < len; i++) {
		let num = nums[i]
		if(num > max) {
			temp.push(num)
			max = num
		}else if(judge(temp, num)) {
			temp.pop()
			temp.push(num)
		}
		if(i === len - 1) {
			ret.push(temp)
			max = -1
			count ++
			i = count
			temp = []
		}
	}
	return Math.max(...ret.map(arr => arr.length))
}



// 输入：nums = [10,9,2,5,3,7,101,18] 输出：4
// 输入：nums = [0,1,0,3,2,3] 输出：4
// 输入：nums = [7,7,7,7,7,7,7] 输出：1


// 过程：
// try 1.逻辑写完之后，nums = [0,1,0,3,2,3] 输出：3
// try 2.加上judge条件之后,成功


// 伙伴评价
// 可以尝试使用动态规划思想

// 感悟总结：
// 多考虑一些边界条件
// 尝试用其他方法实现

/**
 * 最长递增子序列
 */
function theLongestIncQue(nums) {
	// 待实现
}