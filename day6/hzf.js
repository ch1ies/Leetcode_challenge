/**
 * 三数之和
 * @param {Array} arr 输入的数组
 * @param {number} sum 输入目标和
 * @returns {Array} 满足条件的集合
 */
function threeSum(arr, sum, ret = []) {
    if(!Array.isArray(arr) || typeof sum !== 'number') {
       return console.log('请输入合法参数')
    }
    for(let i = 0, len = arr.length; i < len; i++) {
        let restSum = sum - arr[i]
        let mapToInx = {}
        for(let j = i + 1; j < len; j++) {
            if(mapToInx[arr[j]] !== undefined) {
                  ret.push([arr[i], restSum - arr[j], arr[j]])
            }
            mapToInx[restSum - arr[j]] = j
        }
    }
    return ret 
}

// 不符合题意，但是可以解决递增数组的相同问题
function threeSum1(arr, sum, ret = []) {
    if(!Array.isArray(arr) || typeof sum !== 'number') {
       return console.log('请输入合法参数')
    }
    for(let i = 0, len = arr.length; i < len; i++) {
        let restSum = sum - arr[i]
        let start = i + 1, end = len - 1 
        while(start < end) {
            let sItem = arr[start]
            let eItem = arr[end]
            if(sItem + eItem === restSum) {
                ret.push([arr[i], sItem, eItem])
                start ++ 
                end --
            }else if(sItem + eItem > restSum) {
                end -- 
            }else {
                start ++ 
            }
        }
    }
    return ret 
}


// 输入：nums = [-1,0,1,2,-1,-4] 输出：[[-1,-1,2],[-1,0,1]]
// 输入：nums = [0,1,1] 输出：[]
// 输入：nums = [0,0,0] 输出：[0,0,0]

// 过程：
// try 1.直接使用双指针逻辑实现， end-- 和start++ 两种条件没有判断，导致结果不对
// try 2.还是使用双指针，加上其他判断条件，结果可以，但是套用题目中的输入，结果又不对，分析了之后发现是因为我的逻辑适用于递增数组不适合乱序数组
// try 3.使用两数之和的思路，处理三数之和，成功~

// 伙伴评价
// 两数之和的思路成功的将复杂度降低到了 O(n^2)，思路很好， 双指针的方式对指针的移动条件较多，不容易控制

// 感悟总结：
// 1. 多考虑题目的数组特征，写出符合题意的最优解
// 2. 尝试一下用其他方法，是否实现


/**
 * 三数之和 另外尝试的一种双指针解法，并不一定比两数之和的思路处理三数之和的解法好
 */
function threeSum(arr, sum, ret = []) {
    if(!Array.isArray(arr) || typeof sum !== 'number') {
        return console.log('请输入合法参数')
    }
    if(arr.length < 3) {
        return ret
    }
    for(let i = 0, len = arr.length; i < len; i++) {
        let restSum = sum - arr[i]
        let left = i + 1
        let right = len - 1
        while(left < right) {
            let leftN = arr[left]
            let rightN = arr[right]
            if(leftN + rightN === restSum) {
                ret.push([arr[i], leftN, rightN])
            }
            if(left === right) {
                left = i + 1
                right--
            }
        }
    }
    return ret
}