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
// let s = "pwwkew" // 3
// let s = 'abcdaecbb' // 5
// console.log('findMostLengthStr(s): ', findMostLengthStr(s));

// 过程
/**
 * 刚开始想用递归实现，后面发现边界条件控制不好，容易造成栈溢出，就想着用双指针实现
 */
// 伙伴评价
// 优点：使用双指针较少的循环次数就可以求得结果
// 建议：1.@returns 缺少返回类型和描述 2.输入值string加上类型判断

// 感悟总结
/**
 * 1. 使用includes 判断数组中是否存在值
 * 2. 增加 record 保存 匹配过的字符
 * 3. 增加返回值描述
 * 4. 加上类型判断
 */

/**
 * 重新实现
 * @param {*} string 
 * @returns 字符最大的长度
 */
function findMostLengthStr2(string) {
    if (typeof string !== 'string') {
        return new Error('请输入字符串')
    }
    let res = [] // 保存字符的数组
    let record = [] // 存储匹配过的字符
    let maxLen = 0 // 记录最长的字符子串长度
    let strArr = string.split('');
    let start = 0; // 开始游标
    let next = 0; // 下一个循环的游标
    while(next < strArr.length) {
        if (res.includes(strArr[next])) { // 当下一个字符串在数组中存在时，记录长度
            if (maxLen < res.length) {
                maxLen = res.length;
            }
            start++ // 开始游标指向下一位开始查找
            next = start 
            record.push(res.join(''))
            res = []
        } else {
            res.push(strArr[next])
        }
        next++;
    }    
    console.log('record: ', record);
    return maxLen
}

// let s = "abcabcbb" // 3
// let s = "bbbbb" // 1
// let s = "pwwkew" // 3
// let s = 'abcdaecbb' // 5
let s = '12abcxyzdaecbb' // 9
console.log('findMostLengthStr(s): ', findMostLengthStr2(s));