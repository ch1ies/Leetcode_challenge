/**
 * 实现两数之和 复杂读 O(n^2)
 * 只考虑一组
 * @param {Array} nums 整数数组 
 * @param {number} target 目标整数
 */
function getSum(nums, target) {
    // 边界判断
    if (nums.length < 2) {
        return new Error('数组的长度需要大于2')
    }
    let result = []
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            let preVal = nums[i]
            let nextVal = nums[j]
            if (preVal + nextVal === target) {
                result.push(i, j)
            }
        }
    }
    if (result.length < 1) {
        return new Error('没有找到两个数')
    }
    return result
}

// nums = [2,11,15], target = 9
// nums = [3,2,4], target = 6
// nums = [3,3], target = 6
// console.log(getSum(nums, target))
// 过程
// 写的过程中没有想到好的算法，写了一个复杂度O(n^2)的算法 

// 伙伴评价
// 边界条件考虑的比较周全；而且用数组result收集结果，可以找到多组满足条件的结果；
// 建议：1.功能函数里，用了let，和var，可以统一为let 2.nums.length 可以提取出来 let len = nums.length，更加简洁

// 感悟总结：
/**
 *  1. 变量定义是保持统一，长变量进行提取
 *  2. 存在多个值时，可以考虑二维数组展示
 *  3. 思考如何将算法负责度简化
 */

/**
 * 两数之和，重构版
 */
function getSum1(nums, target) {
    let len = nums.length
    // 边界判断
    if (len < 2) {
        return new Error('数组的长度需要大于2')
    }
    let result = []
    for (let i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            let preVal = nums[i]
            let nextVal = nums[j]
            if (preVal + nextVal === target) {
                result.push([i, j])
            }
        }
    }
    if (result.length < 1) {
        return new Error('没有找到两个数')
    }
    return result
}
// nums = [2,11,15], target = 9
// nums = [3,2,4], target = 6
nums = [3,3, 2, 4], target = 6  // [ [ 0, 1 ], [ 2, 3 ] ]
console.log(getSum1(nums, target))