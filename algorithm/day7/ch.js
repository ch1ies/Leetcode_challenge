/**
 * 
 * @param {*} nums 整数数组 nums
 */
function findMostSumArr (nums) {
    if (!Array.isArray(nums)) {
        return new Error('请输入一个整数数组')
    }
    // 边界条件处理
    if (nums.length === 1) {
        return  nums[0]
    }
    function getSum (arr) {
        let sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum+=arr[i]
        }
        return sum
    }
    let lens = nums.length
    let res = [] // 存放子数组
    let container = [] // 存储匹配过的的数组
    let addSum = 0 // 相加的和
    let sum = 0 // 记录遍历字符的和
    let nextSum = 0 // 
    // let prevSum = 0 // 上一个和
    for(let i = 0; i < lens; i++) {
        sum += nums[i]
        // 判断越界条件
        if (i + 1 === lens) {
            nextSum = sum
        } else {
            nextSum = sum + nums[i + 1]
        }
        if (nextSum < sum && !res.includes(sum[i])) { // 如果下一次相加的和小于上一次
            res.push(nums[i])
            let num = getSum(res)
            if (num > addSum) {
                addSum = num
            }
            container.push(res)
            sum = prevSum = 0 // 重新匹配
            res = []
        }
        res.push(nums[i])
    }

    console.log('container: ', container);
    return addSum
}

// const nums = [-2,1,-3,4,-1,2,1,-5,4];
// const nums = [1] // 1
const nums = [5,4,-1,7,8] // 9

console.log('findMostSumArr(nums): ', findMostSumArr(nums));

// 总结
// 1. 未能跑出第三个示例
// 2. 想使用O(n)的算法得到结果


// 伙伴评价
// 边界条件判断很全面，逻辑的时间复杂度也少
// 建议：1.逻辑可以调整下，使其满足所有情况

// 总结
// 思考使用O(n) 的算法实现

// 每周总结
// 1. 遇到问题时，先想解决思路，不需要一开始就想做的完美
// 2，复杂问题，对于边界条件的判断处理还需要加强

function findMostSumArr2 () {
    // 待实现
}

