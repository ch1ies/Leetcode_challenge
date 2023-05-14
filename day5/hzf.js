/**
 * 最长回文子串 
 * @param {string} s 输入的字符串
 * @returns {string} 满足条件的字符串
 */
function theLongestStr(str) {
    if(typeof str !== 'string') {
        return console.log('参数必须为字符串')
    }
    function isMoslems(s) {
        if(s.length < 2) return false
        return s.split('').reverse().join('') === s
    }
    let maxStr = ''
    let sArr = str.split(''), temp = '', ret = [], count = 0
    for(let i = 0, len = sArr.length; i < len; i++) {
        temp += sArr[i]
        if(isMoslems(temp)) {
            maxStr = maxStr.length > temp.length ? maxStr : temp
            ret.push(temp)
        }
        console.log(temp)
        if(i === len - 1) {
            i = ++count
            temp = sArr[i]
        }
    }
    console.log(ret)
    return maxStr
}


// 输入：s = "babad" 输出："bab"
// 输入：s = "cbbd" 输出："bb"

// 过程：
// try 1.边界条件没有考虑全面，功能实现不全
// try 2.成功

// 伙伴评价
// 整体逻辑实现完整
// 建议：边界判断 i === len - 1 无须遍历整个字符串，遇到第一个相同的字母即可

// 感悟总结：
// 1. 时间复杂度还是有点高，特别是判断是否是回文字符串那里


/**
 * 最长回文子串 问题重构
 */
function theLongestStr(str) {
    if(typeof str !== 'string' || !str) {
        console.log('请输入有效字符串')
    }
    // function isPalindrome(str) {
    //     let len = str.length 
    //     if(len < 2) return true 
    //     let isOdd = len % 2 === 1
    //     let start, end 
    //     if(isOdd) {
    //         let m = ~~(len / 2)
    //         start = m - 1
    //         end = m + 1
    //     }else {
    //         end = len / 2 
    //         start = end - 1
    //     }
    //     while(start > -1) {
    //         let sChar = str.charAt(start) 
    //         let eChar = str.charAt(end) 
    //         if(sChar !== eChar) {
    //             return false 
    //         }
    //         start ++
    //         end --
    //     }
    //     return true 
    // }
}