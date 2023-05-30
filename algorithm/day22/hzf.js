/**
 * 最长公共前缀
 * @param {Array} strs 字符串数组
 * @returns {string} 返回最长前缀
 */
function theLongestPrefix(strs) {
	if(!Array.isArray(strs)) {
		return console.log('请输入合法参数')
	}
	let prefix = ''
	let fStr = strs.slice(0, 1)[0]
	let restStrs = strs.slice(1)
	for(let i = 0, len = fStr.length; i < len; i++) {
		let str = fStr[i]
		let isMatch = restStrs.every(restStr => restStr[i] === str)
		if(isMatch) {
			prefix += str
		}
	}
	return prefix
}



// 输入：strs = ["flower","flow","flight"] 输出："fl"
// 输入：strs = ["dog","racecar","car"] 输出：""


// 过程：
// try 1.以第一个字符串为参照，把剩余字符串的相同位置的单词一一匹配，成功～


// 伙伴评价
// 符合题意，可尝试其他不同解决方法

// 感悟总结：
// 时间复杂度较高，寻找更多方法实现

/**
 * 最长公共前缀
 */
function theLongestPrefix(strs) {
	// 待实现
}