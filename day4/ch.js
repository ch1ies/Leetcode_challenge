/**
 * 
 * @param {*} num1 正序数组1
 * @param {*} num2 正序数组2
 */
function findMiddleNum(num1, num2) {
    if (num1.length <= 0 || num2.length <= 0) { return }
    // 思路
    // 2. 遍历长度长的数组
    const len1 = num1.length
    const len2 = num2.length
    const pivot = 0
    for (var i = 0; i < len1.length; i++) {
        if (num1[0] >= num2[len2 - 1]) {
            return [...num2, ...num1]
        } else if (num2[0] > num1[len1 - 1]) {
            return [...num1, ...num2]
        } else {
            let mid1left = num1.slice(0, Math.floor(len1 / 2))
            let mid1Right = num2.slice(Math.floor(len1 / 2))
            let mid2left = num1.slice(0, Math.floor(len2 / 2))
            let mid2Right = num2.slice(Math.floor(len2 / 2))
            const r1 = findMiddleNum(mid1left, mid1Right)
            const r2 = findMiddleNum(mid2left, mid2Right)
        }
    }
}
// 总结： 通过for 循环判断边界条件，递归调用不断的进行排序返回， 20分钟内没做出来

/**
 * 合并数组，使用快速排序
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function findMiddleNum2(num1, num2) {
    let mid = 0
    // 1. 合并数组
    let newArr = num1.concat(num2)
    // 2. 快速排序
    const res = quickSort(newArr)
    const resLen = res.length
    if (resLen % 2 === 0) { // 是2的倍数
        mid = (res[resLen / 2] + res[(resLen -2) /2]) /2 
    } else {
        mid = res[(resLen - 1) / 2]
    }
    return mid
}
var quickSort = function (arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));

};

// const nums1 = [1, 3], nums2 = [2] // 2
const nums1 = [1,2], nums2 = [3,4] // 5
console.log('findMiddleNum(nums1, nums2): ', findMiddleNum2(nums1, nums2));

// 过程
/**
 * 1. 通过for 循环判断边界条件，递归调用不断的进行排序返回，未能在20分钟内实现
 * 2. 改用快速排序方式
 */

// 伙伴评价
// 使用了多种方法完成了功能，比较全面
// 建议：1.输入传参没有进行类型判断 2.时间复杂度超越了题目的O(log (m+n))

// 总结
