/**
 * 买卖股票的最佳时机
 * @param {Array} prices 价格数组
 * @returns {number} 返回最大利润
 */
function maxProfit(prices) {
	if(!Array.isArray(prices)) {
		return console.log('请输入数组')
	}
	if(prices.length < 2) {
		return 0
	}
	let minPrice = prices[0], maxPro = 0
	for(let i = 0, len = prices.length; i < len; i++) {
		let price = prices[i]
		maxPro = Math.max(maxPro, price - minPrice)
		minPrice = Math.min(price, minPrice)
	}
	return maxPro
}



// 输入：[7,1,5,3,6,4] 输出：5
// 输入：[7,6,4,3,1] 输出：0


// 过程：
// try 1.少了一个边界条件prices.length < 2
// try 2.成功


// 伙伴评价
// 该算法比较好的实现了该问题，通过记录最小值和最大值，简化了计算空间


// 感悟总结：
// 经过了之前的题目锻炼，这个题很快就找到了思路，最低的价格和最高的利润，但是对于边界情况的考虑第一时间没有想到，多反思多总结
// 尝试用其他方法处理下

/**
 * 买卖股票的最佳时机
 */
function maxProfit(prices) {
	// 待实现
}