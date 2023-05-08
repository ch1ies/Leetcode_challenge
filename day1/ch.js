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
nums = [3,3], target = 6
console.log(getSum(nums, target))
// 过程
// 写的过程中没有想到好的算法，写了一个复杂度O(n^2)的算法 

// 伙伴评价
// 

// 感悟总结：