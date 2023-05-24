/**
 * 只出现一次的数字
 * @param {Array} nums 输入的数字集合
 * @returns {number} 只出现了一次的元素
 */
function findNum(nums) {
   if(!Array.isArray(nums) || !nums.length) {
			return console.log('请输入合法参数')
   }
	 let mapToCount = {}
	 for(let i = 0, len = nums.length; i < len; i++) {
			let n = nums[i]
			if(!mapToCount[n]) {
				mapToCount[n] = 1
			}else {
				mapToCount[n] = mapToCount[n] + 1
			}
	 }
	 return mapToCount
}
// 重写
function findNum1(nums) {
	let len = nums.length
	if(!Array.isArray(nums) || !len) {
		 return console.log('请输入合法参数')
	}
	let mapToCount = {}
	 for(let i = 0, len = nums.length; i < len; i++) {
			let n = nums[i]
			if(!mapToCount[n]) {
				mapToCount[n] = 1
			}else {
				mapToCount[n] = mapToCount[n] + 1
			}
	 }
	 console.log(mapToCount)
	 for(let key in mapToCount) {
		if(mapToCount[key] === 1) {
			return key
		}
	 }
}


// 输入：nums = [2,2,1] 输出：1
// 输入：nums = [4,1,2,1,2] 输出：4
// 输入：nums = [1]  输出：1



// 过程：
// try 1.经过思考写出来的逻辑只返回了集合，没有返回题目要求的数字
// try 2.成功

// 伙伴评价
// 题意是对称的情况下，遍历到相同的直接删除即可，留下的即为答案

// 感悟总结：
// 注意审题
// 尝试其他解法实现

/**
 * 只出现一次的数字 重构 
 */
function findNum(nums) {
		if(!Array.isArray(nums)) {
			return console.log('请输入数组')
		}
    let ret = 0 
		for(let i = 0, len = nums.length; i < len; i++) {
			ret ^= nums[i]
		}
		return ret
}