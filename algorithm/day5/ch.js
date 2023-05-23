/**
 * 寻找最长的回文字符串
 * @param {*} s 
 */
function findLastStr(s) {
    if (typeof s !== 'string') {
        return new Error('请输入一个字符串')
    }
    function isEqual(s) {
        if(s.length < 2) return false
        return s.split('').reverse().join('') === s
    }
    let cur = 0 // 当前游标
    let next = 0 // 下一个游标
    let str = '' // 记录字符串
    let res = [] 
    
    while (next < s.length) {
        if (res.includes(s[next])) {
            // 判断是否是回文字符串
            if (isEqual(res.join(''))) {
                str = res.length > str ? res.join('') : str
                res = []
            } 
            cur++
            next = cur
        }
        next++
        res.push(s[next])
    }
    return str
}

// s = "babad"
// s= 'cbbd'
s = 'babccba'

console.log('findLastStr(s): ', findLastStr(s));

// 过程
// 1. 第一时间想到在找不重复子串的基础上，增加判断是否是回文字符串的逻辑
// 2. 刚开始对如何判断回文字符串没有思路，想着用原生的方式实现

// 伙伴评价
// 建议：判断回文字符串的方法可以改下原生的

//总结