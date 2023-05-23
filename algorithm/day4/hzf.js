/**
 * 寻找两个正序数组的中位数 
 * @param {Array} nums1 数组1
 * @param {Array} nums2 数组2
 * @returns {number} 中位数
 */
function findMedium(nums1, nums2) {
    function notArr(arr) {
        return !Array.isArray(arr)
    }
    if(notArr(nums1) || notArr(nums2)) {
        return console.log('请输入数组')
    }
    let medium, mInx
    let arr = nums1.concat(nums2)
    arr.sort()
    let len = arr.length
    let isOdd = len % 2 === 1
    if(isOdd) {
        mInx = Math.floor(len / 2)
        medium = arr[mInx]
    }else {
        mInx = len / 2
        medium = (arr[mInx] + arr[mInx - 1]) / 2
    }
    return medium
}


// 输入：nums1 = [1,3], nums2 = [2] 输出：2
// 输入：nums1 = [1,2], nums2 = [3,4] 输出：2.5

// 过程：
// try 1.成功了，感觉不太对劲，太简单了。应该是不能用数组的concat方法和sort方法

// 伙伴评价
// 建议可以手动实现排序
// 感悟总结：
// 1. 时间复杂度和官方的差太远，考虑要求的复杂度并且不使用数组的任何api的情况下，进行重写


/**
 * 无重复字符的最长子串 问题重构
 */
function findMedium(nums1, nums2) {
    // 待处理
}