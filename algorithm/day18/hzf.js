/**
 * 爬楼梯
 * @param {number} n 多少阶楼梯
 * @returns {number} 返回方法数
 */
function climbStairs(n) {
	if(n === 1 || n === 0) {
		return 1
	}
	return climbStairs(n - 2) + climbStairs(n - 1)
}



// 输入：n = 2 输出：2
// 输入：n = 3 输出：3
// 输入：n = 4 输出：5


// 过程：
// try 1.成功 

// 伙伴评价


// 感悟总结：
// 找规律，然后把边界条件写好
// 尝试用其他方法，比如动态规划或者矩阵快速幂来实现

/**
 * 爬楼梯 重构
 */
function climbStairs(n) {
	// 待实现
}