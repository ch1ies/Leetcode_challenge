/**
 * 最大子数组和
 * @param {Array} arr 输入的数组
 * @returns {number} 满足条件的最大和
 */
function maxSum(arr) {
    if(!Array.isArray(arr)) {
        return console.log('请输入数组')
    }
    if(!arr.length) {
        return console.log('数组长度必须大于1')
    }
    let maxS, maxNum, sum
    let count = 0
    if(arr.length === 1) {
        return maxS = arr[0]
    }
    for(let i = 0, len = arr.length; i < len; i++) {
        if(!i) {
            sum = maxS = maxNum = arr[i]
        }else {
            sum += arr[i]
            maxNum = Math.max(maxNum, sum)
        }
        if(i === len - 1) {
            i = ++count
            maxS = Math.max(maxNum, maxS)
            sum = maxNum = 0
        }
    }
    return maxS
}




// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4] 输出：6
// 输入：nums = [1] 输出：1
// 输入：nums = [5,4,-1,7,8] 输出：23

// maxSum([5,4,-1,7,8])
console.log('maxSum([5,4,-1,7,8]): ', maxSum([-2,1,-3,4,-1,2,1,-5,4] ));

// 过程：
// try 1.边界条件写错，判断小于1的条件写成了arr.length，是!arr.length，低级失误
// try 2.一开始思路就正确：通过每轮连续元素遍历去求和，然后每轮的和取最大值，再从各轮的最大值中取最大值
// 但是求和逻辑写错，没有用sum而是用maxNum去代替，导致出错
// try 3.成功

// 伙伴评价
// 整体思路正确，得到正确的答案
// 有没有复杂度更低的方式呢？

// 感悟总结：
// 经过了前面6天的练习，现在遇到问题首先去想思路，思路有了，再去用较低复杂度的逻辑，比之前有了一些进步
// 尝试使用复杂度更低的解法去重构

/**
 * 最大子数组和
 * 动态规划转移方程：f(i)=max{f(i−1)+nums[i],nums[i]}
 */
function maxSum(arr) {
    if(!Array.isArray(arr)) {
        return console.log('请输入数组')
    }
    let preMax = 0, max = arr[0]
    for(let i = 0, len = arr.length; i < len; i++) {
        preMax = Math.max(preMax + arr[i], arr[i])
        max = Math.max(preMax, max)
    }
    return max
}