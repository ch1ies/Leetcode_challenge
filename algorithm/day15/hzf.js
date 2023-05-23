/**
 * 括号生成
 * @param {number} num 输入的数字
 * @returns {Array} 返回的括号集合
 */
function genBrackets(num) {
	if (typeof num !== 'number') {
		return console.log('请输入数字')
	}
	if (num === 0) {
		return ''
	}
	function genSimple(num) {
		let lBracket = '(', rBracket = ')'
		let str = ''
		while (num) {
			str = lBracket + str + rBracket
			num--
		}
		return str
	}
	let ret = []
	let simple = genSimple(num)
	ret.push(simple)
	function judge(str) {
		let map = {
			'(': ')'
		}
		let len = str.length
		let stack = []
		for (let i = 0; i < len; i++) {
			let curStr = str[i]
			if (map[curStr]) {
				stack.push(map[curStr])
			} else if (stack.includes(curStr)) {
				stack.pop()
			} else {
				return false
			}
		}
		return stack.length === 0 ? true : false
	}
	if (num === 1) {
		return ret
	}
	let sArr = simple.split('')
	let cursor = num, end = 2 * num - 1, tempArr = [], map = {}
	while (cursor > 0) {
		if (cursor === end) {
			break
		}
		[sArr[cursor - 1], sArr[cursor]] = [sArr[cursor], sArr[cursor - 1]]
		let str = sArr.join('')
		if (judge(str) && !map[str]) { // 
			ret.push(str)
			tempArr.push(str)
			map[str] = true
		}
		cursor--
		if (cursor === 0) {
			let sStr = tempArr.shift()
			sArr = sStr.split('')
			if (tempArr.length > 1) {
				cursor = num
			} else {
				num++
				cursor = num
			}
		}
	}
	return ret
}

// 重写
function genBrackets(n) {
	let left = right = n * 2
	let ret = []
	function judge(str) {
		let map = {
			'(': ')'
		}
		let len = str.length
		let stack = []
		for (let i = 0; i < len; i++) {
			let curStr = str[i]
			if (map[curStr]) {
				stack.push(map[curStr])
			} else if (stack.includes(curStr)) {
				stack.pop()
			} else {
				return false
			}
		}
		return stack.length === 0 ? true : false
	}
	function gen(left, right, str, ret) {
		if (left > 0 && right > 0) {
			gen(--left, right, str + '(', ret)
			gen(left, --right, str + ')', ret)
		} else {
			judge(str) && ret.push(str)
		}
	}
	gen(left, right, '', ret)
	return ret
}



// 输入：n = 3 输出：["((()))","(()())","(())()","()(())","()()()"]
// 输入：n = 1 输出：["()"]



// 过程：
// try 1.想使用栈的思路去实现逻辑，经过几次修改，发现在 n = 4的时候 情况会少很多
// try 2.经过了第一种方法几十分钟的挣扎，最终放弃，重写了递归的方法，终止条件if(left > 0 || right > 0) 写错导致栈溢出
// try 3.将终止条件修改了之后，成功

// 伙伴评价
// 能使用迭代的方式进行尝试实现，很不错
// 对与递归实现的题目分步骤思考，多总结

// 感悟总结：
// 当一种思路解不出来时，要果断放弃尝试其他思路

/**
 * 括号生成
 */
function genBrackets(num) {
	//  待实现
}