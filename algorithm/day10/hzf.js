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
 * 有效的括号 利用map集合判断是否有值，取代Array.includes
 */
function judge(str) {
    const map = {
       '(': ')', 
       '[': ']', 
       '{': '}'
    }
    let len = str.length 
    if(typeof str !== 'string') {
        return console.log('请输入字符串')
    }
    if(len < 2) {
        return false
    }
    let hasMap = {}, i = 0, stack = []
    while(true) {
        let s = str[i]
        if(map[s]) {
            stack.push(map[s])
            hasMap[map[s]] = true
        }else if(hasMap[s]) {
            let last = stack.pop()
            if(s !== last) {
                return false
            }
        }else {
            return false
        }
        i++
        if(i === len) {
            break
        }
    }
    return !stack.length
}