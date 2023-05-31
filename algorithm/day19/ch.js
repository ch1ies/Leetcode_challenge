/**
 * 寻找最长递增子序列
 * @param {*} nums 
 */
function findMostLengthSeries(nums) {
    let maxLength = 0;
    let container = []
    let next = 0
    let cur = 0
    while (cur < nums.length) {
        if (nums[next] > nums[cur]) {
            container.push({
                index: next,
                value: nums[next]
            })
        }
        if (next == nums.length - 1) {
            cur++
            next = cur
            maxLength = Math.max(maxLength, container.length)
        }
        next++
    }
    console.log('container: ', container);
    return maxLength
    // for (let i = 0; len = num.length, i < len; i++)  {
    //     if (nums[i] < nums[i + 1]) {

    //     }
    // }
}

// 解法
function findMostLengthSeries1(nums) {
    if (!Array.isArray(nums)) {
        return new Error('nums must be an array')
    }
    let dp = [];
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        dp.push(1)
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                console.log('j: ', j);
                dp[i] = Math.max(dp[i],dp[j] + 1)
            }
        }
    }
    console.log('dp: ', dp);
    dp.forEach(it => {
        max = Math.max(it, max);
    })
    return max
}
// const nums = [0,1,0,3,2,3] // 输出4
const nums = [10,9,2,5,3,7,101,18] // 输出4
// const nums = [7,7,7,7,7,7,7]  // 输出1
console.log('findMostLengthSeries(nums): ', findMostLengthSeries1(nums));


// 过程
// 本来想着用双指针的方式去实现，后发现复杂度较高，看了官方答案，使用了动态规划的思想


// 伙伴评价
// 使用了多种方法实现了功能

// 总结
// 此类题目多练习，多熟悉动态规划思想