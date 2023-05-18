/**
 * 有效的括号
 * @param {string} str 输入的字符串
 * @returns {boolean} 判断是否有效
 */
function judge1(str) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let len = str.length
    if(typeof str !== 'string' || len < 2) {
        return console.log('请输入合法参数')
    }
    let stack = []
    for(let i = 0; i < len; i++) {
        let curStr = str[i]
        if(map[curStr]) {
            stack.push(map[curStr])
        }else if(stack.includes(curStr)) {
            stack.pop()
        }else {
            return false
        }
    }
    return stack.length === 0 ? true : false
}

// 输入：s = "()" 输出：true
// 输入：s = "()[]{}" 输出：true
// 输入：s = "(]" 输出：false
// 输入：s = "([)]" 输出：false



// 过程：
// try 1.经过一些思考之后，使用栈的方式最好处理，试了一下没有问题

// 伙伴评价
// 1. 使用栈的数据结构较好的解决了该类问题，算法复杂度控制在O(n)

// 感悟总结：
// 尝试下用其他方式处理

/**
 * 有效的括号
 */
function judge(str) {
    // 待实现
}