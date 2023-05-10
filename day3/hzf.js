/**
 * 无重复字符的最长子串 
 * @param {string} str 字符串
 * @returns {number} 最大子串的长度
 */
function maxLenSubStr(str) {
    if(typeof str !== 'string') {
        console.log('请输入字符串')
        return false
    }
    let maxLen = 0 
    if(str.length === maxLen) {
        return maxLen
    }
    let arr = str.split('')
    let ret = [], temp = ''
    for(let i = 0, len = arr.length; i < len; i++) {
        if(temp.includes(arr[i])) {
            maxLen = Math.max(maxLen, temp.length)
            ret.push(temp)
            temp = arr[i]
        }else {
            temp += arr[i]
        }
    }
    ret.push(temp)
    maxLen = Math.max(maxLen, temp.length)
    console.log(ret) // 查看子串列表
    return maxLen
}


// 输入："abcabcbb" 输出：3
// 输入："bbbbb"  输出：1
// 输入："pwwkew" 输出：3

// 过程：
// try 1.在最后一次子串构造之后，没有加入比较判断，导致结果出错
// try 2.成功了

// 伙伴评价
// 当 s = 'abcdaecbb' 此时应该输出 5（bcdae）

// 感悟总结：


/**
 * 无重复字符的最长子串 问题重构
 */
function maxLenSubStr(str) {
    // 待实现
}