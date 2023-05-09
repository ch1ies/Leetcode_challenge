/**
 * 双指针思路，时间复杂度O(n)
 * @param string 
 * @returns 
 */
function findMostLengthStr(string) {
    let res = [] // 保存字符的数组
    let maxLen = 0 // 记录最长的字符子串长度
    let strArr = string.split('');
    let start = 0; // 开始游标
    let next = 0; // 下一个循环的游标
    while(next < strArr.length) {
        if (res.indexOf(strArr[next])) {
            if (maxLen < (next - start + 1)) {
                maxLen = next -start + 1;
            }
            start++
            next = start
        }
        res.push(strArr[next])
        next++;
    }    
    return maxLen
}

// let s = "abcabcbb" // 3
// let s = "bbbbb" // 1
let s = "pwwkew" // 3
console.log('findMostLengthStr(s): ', findMostLengthStr(s));

// 过程
/**
 * 刚开始想用递归实现，后面发现边界条件控制不好，容易造成栈溢出，就想着用双指针实现
 */
// 伙伴评价

// 感悟总结：
