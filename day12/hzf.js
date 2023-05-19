/**
 * 正则表达式匹配
 * @param {string} s 输入的匹配字符串
 * @param {string} p 输入的正则字符串
 * @returns {boolean} 是否匹配
 */
function match(s, p) {
    let bol = false
    if(typeof s !== 'string' || typeof p !== 'string') {
        return console.log('请输入合法参数')
    }
    if(!p.includes('*') && !p.includes('.')) {
        return s === p
    }
    let len = s.length, infiateS = ''
    for(let i = 0; i < len; i++) {
        if(p[i] === '.') {
            bol = true
        }else if(p[i] === '*') {
            bol = true
            infiateS = p[i - 1]
        }else if(p[i - 1] === '*' && p[i] !== '*') {
            infiateS = ''
            bol = p[i] === s[i]
        }else if(p[i] === s[i] || infiateS === s[i] || infiateS === '.') {
            bol = true
        }else {
            bol = false
            break
        }
        if(i === len - 1 && infiateS !=='*' && ![undefined, '*'].includes(p[i+1])) {
           bol = false
        }
    }
    return bol
}

// 输入：s = "aa", p = "a" 输出：false
// 输入：s = "aa", p = "a*" 输出：true
// 输入：s = "ab", p = ".*" 输出：true



// 过程：
// try 1.!p.includes('*') && !p.includes('.') 的且写成了||，犯了低级错误
// try 2. .*a 这种*后面还有字母的情况没考虑到，增加了else if(p[i - 1] === '*' && p[i] !== '*') { 这个判断，重置了infiateS
// try 3. 当字符串s匹配之后，p正则字符串没匹配完，如：aaa -> .*ab这种情况会出错，添加了i === len - 1 && infiateS !=='*' && ![undefined, '*'].includes(p[i+1])) 情况
// try 4. 成功

// 伙伴评价

// 感悟总结：
// 这个题没有太好的思路，各种判断尝试，加了各种条件才实现
// 探索下有没有更好的逻辑思路

/**
 * 正则表达式匹配 重构
 */
function match(s, p) {
    
}
