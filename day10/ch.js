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
const s = "()[]{}" // true
// const s = "(}" // true

console.log('effectiveBracket(s): ', effectiveBracket(s));

// 过程
// 1. 在给定的字符类型下，使用了map 记录了每种类型出现的次数，判断是否相等


// 伙伴评价


// 总结