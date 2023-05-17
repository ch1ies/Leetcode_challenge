/**
 * 有效的括号
 * @param {*} str 
 */
function effectiveBracket(str) {
    if (typeof str !== 'string') {
        return newError('请输入有效的字符串')
    }
    // 对应字符串的map
    const map = { 
        left: 0,
        left1: 0,
        left2: 0,
    }
    for (let i = 0; len = str.length, i < len; i++) {
        if (str[i] === '(') {
            map.left++
        } else if (str[i] === ')') {
            map.left--
        } else if (str[i] === '[') {
            map.left1++
        } else if (str[i] === ']') {
            map.left1--
        } else if (str[i] === '{') {
            map.left2++
        } else if (str[i] === '}') {
            map.left2--
        }
    }
    if (map.left === 0 && map.left1 === 0 && map.left2 === 0) {
        return true
    }
    return false
}
// const s = '()' // true
const s = " " // true
// const s = "(}" // true

console.log('effectiveBracket(s): ', effectiveBracket(s));

// 过程
// 1. 在给定的字符类型下，使用了map 记录了每种类型出现的次数，判断是否相等


// 伙伴评价
// 思路比较好，逻辑实现了题目给定的结果用例，但：
// 在一些边界问题上需要考虑 如：effectiveBracket('') -> true  effectiveBracket('12') -> true
// 在一些情况下结果有误，如：effectiveBracket('(][)') -> true effectiveBracket("([)]") -> true

// 总结