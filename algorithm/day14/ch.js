/**
 * 
 * @param {*} nums 非空整数数组nums
 */
function indNumberByOccurOne(nums) {
    if (!Array.isArray(nums)) {
        return new Error('请输入一个合法的数组')
    }
    if(nums.length === 0) {
        return nums
    }
    const map = {} // 数据结构
    for (let i = 0; len = nums.length, i < len; i++) {
        if (map[nums[i]] !== undefined) {
            // res = nums[i]
            delete map[nums[i]]
        } else {
            map[nums[i]] = i
        }
    }
    return Object.keys(map)[0]
}
// const nums = [2,2,1] // 输出1
// const nums = [4,1,2,1,2] // 输出 4
const nums = [1] // 输出1

console.log('indNumberByOccurOne(nums): ', indNumberByOccurOne(nums));

// 过程
// 当前解法仅仅适用于题意，不够通用

// 伙伴评价
// 比较好的实现了题目的要求
// 可以考虑更多的方法来实现

// 总结
// 考虑其他方式来解题