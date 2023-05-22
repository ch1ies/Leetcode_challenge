/**
 * 
 * @param {*} str 字符串
 * @param {*} pattern  字符规律
 */
function matchRegex(str, pattern) {
    if(typeof str !== 'string' || typeof pattern !== 'string') {
        return new Error('请输入字符串')
    }
    // 判断三种状态： 原始字符，* 字符， .字符
    let matchStr = ''
    if (pattern.includes('*')) {
        matchStr = pattern.split('*')[1] // 得到匹配的字符
        if (matchStr.includes('.')) {
            return true
        }
        // 根据规则去匹配
        return  str.includes(matchStr)

    } else {
        return str === pattern  // 输入原始字符，通过是否相等进行比较
    }
}

// const s = "aa", p = "a"  // false
// const s = "aa", p = "a*" // true
const s = "ab", p = ".*"  // true
console.log('matchRegex(s, p): ', matchRegex(s, p));

// 过程
// 根据题意实现的比较简单，没有考虑复杂情况


// 伙伴评价
// 边界情况考虑的比较周全，比较好的实现了题目要求
// 但一些特殊情况需要考虑，如：matchRegex('aab', '.ab') 应该为true

// 总结


// 重构
function matchRegex2(s, p) {
    
}