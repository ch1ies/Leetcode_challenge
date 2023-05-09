/**
 *  两数相加 时间复杂度O(n)
 * @param {*} arr1 非空链表1 
 * @param {*} arr2 非空链表2
 * @returns {Array} 求和之后的数组
 */
function getAddNum(arr1, arr2) {
    // 1. 得到两个相等长度的链表，不足的位数补0
    const len1 = arr1.length
    const len2 = arr2.length
    let res = [] // 保存结果的数组
    let add = 0 // 记录需要进位的数组
    const compareArr = len1 > len2 ? len1 : len2 // 记录长的数组
    for (let i = 0; i < compareArr; i++) {
        if (!arr1[i]) {
            arr1[i] = 0
        }
        if (!arr2[i]) {
            arr2[i] = 0
        }
        let left = (arr1[i] + arr2[i] + add) % 10  // 得到余数
        if (Math.floor((arr1[i] + arr2[i] + add) / 10) >= 1) { // 得到需要进位的数字
            add = Math.floor((arr1[i] + arr2[i] + add) / 10)
        } else {
            add = 0
        } 
        res.push(left)
    }
    // 循环结束后，最后一位若有值，需要记录
    if (add) {
        res.push(add)
    }
    return res
}
// l1 = [2,4,3], l2 = [5,6,4]
// l1 = [0], l2 = [0]
// l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
l2 = [9,9,9,9,9,9,9], l1 = [9,9,9,9]

console.log('getAddNum(l1, l2): ', getAddNum(l1, l2));

// 过程
/**
 * 1. 对取余数不太清晰
 * 2. 边界条件判断写的时候没有考虑到，打印后才发现书写不完整
 */

// 伙伴评价
// 结果对了，过程没有用链表

// 感悟总结：
/**
 * 1. 思考的时候慢一点，有些条件没有理解好
 * 2. 可以使用链表数据结构重新实现一遍
 */
