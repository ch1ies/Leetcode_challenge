/**
 * 
 * @param {*} nums 整数数组
 */
function findThreeNumSum(nums) {
    if (!Array.isArray(nums)) {
        return new Error('请传入一个数组')
    }
    let container = []
    let res = []
    function isAddEqZero(i, j, k) {
        return i + j + k === 0 
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            for (let k = 2; k < nums.length; k++) {
                container = [nums[i], nums[j], nums[k]]
                if (isAddEqZero(...container)) {
                    res.push(container)
                }
            }
        }
    }
    return res
}

// const arr = [-1,0,1,2,-1,-4]
const arr = [0,1,1] // 输出 []
console.log('res:', findThreeNumSum(arr));

//过程
// 1. 第一时间想写一个复杂度不高的算法，没想到，目前复杂度为O(n^3)
// 2. 没有对这三个数做去重，当顺序改变时也算为一次答案

// 伙伴评价
// 满足题意，但是实际复杂度过高，可以尝试下时间复杂度降为O(n^2)

// 总结
// 1. 尝试一下使用 两数之和的思路，降低O(n)的复杂度
// 2. 其他方法

function findThreeNumSum2 (num2) {
    // 重构 待实现
}