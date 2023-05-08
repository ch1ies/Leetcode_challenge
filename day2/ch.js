/**
 * 
 * @param {*} arr1 非空链表1 
 * @param {*} arr2 非空链表2
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


// 感悟总结：