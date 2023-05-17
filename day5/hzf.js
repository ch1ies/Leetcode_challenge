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
    // 判断是否是回文字符串，暂时不用
    function isPalindrome(str) {
        let len = str.length 
        if(len < 2) return true 
        let isOdd = len % 2 === 1
        let start, end 
        if(isOdd) {
            let m = ~~(len / 2)
            start = m - 1
            end = m + 1
        }else {
            end = len / 2 
            start = end - 1
        }
        while(start > -1) {
            let sChar = str.charAt(start) 
            let eChar = str.charAt(end) 
            if(sChar !== eChar) {
                return false 
            }
            start ++
            end --
        }
        return true 
    }
    if(typeof str !== 'string' || !str) {
        console.log('请输入有效字符串')
    }
    let max = temp = ''
    let len = str.length 
    if(len < 2) return str 
    function getPalindrome(str, l, r) {
        while(l > 0 && r < len && str[l] === str[r]) {
            l -- 
            r ++;
        }
        if(str[l] === str[r]) {
            let sLen = r - l + 1
            let palindStr = str.substr(l, sLen)
            return [sLen, palindStr]
        }else if(str[l + 1] === str[r - 1]) {
            let sLen = r - l - 1 
            let palindStr = str.substr(l + 1, sLen) 
            return [sLen, palindStr]
        }else {
            return [0]
        }
    }
    for(let i = 0; i < len; i++) {
        const [len1, str1] = getPalindrome(str, i, i) // 这个有必要，否则aaa aaaaa 这种情况判断不出来
        const [len2, str2] = getPalindrome(str, i, i + 1)
        if(!len1 && !len2) continue
        temp = len1 > len2 ? str1 : str2 
        max = max.length > temp.length ? max: temp
    }
    return max
}
