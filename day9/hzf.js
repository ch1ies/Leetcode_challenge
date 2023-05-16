/**
 * 盛最多水的容器
 * @param {Array} height 输入的数组
 * @returns {number} 最大水量数
 */
function maxArea(height) {
    if(!Array.isArray(height)) {
        return console.log('请输入数组')
    }
    function getArea(w, h) {
        return w * h
    }
    let max = 0
    for(let i = 0, len = height.length; i < len; i++) {
        let o = i + 1
        while(o < len) {
            let w = o - i 
            let h = Math.min(height[i], height[o])
            max = Math.max(getArea(w, h), max)
            o ++
        }
    }
    return max
}


// 输入：[1,8,6,2,5,4,8,3,7] 输出：49
// 输入：[1,1] 输出：1



// 过程：
// try 1.while循环里，height[i], height[o] 写成 arr[i], arr[o] 导致报错，犯了低级错误
// try 2.成功

// 伙伴评价
// 逻辑完整实现
// 建议：for 循环的次数可以减少一层

// 感悟总结：
// 时间复杂度较高，可以尝试下复杂度更低的方法

/**
 * 盛最多水的容器
 */
function maxArea(height) {
    if(!Array.isArray(height)) {
        return console.log('请输入数组')
    }
    let max = 0, len = height.length
    if(len < 2) {
        return max
    }
    const getArea = (w, h) => w * h
    let left = 0, right = len - 1
    while(left < right) {
        let lNum = height[left], rNum = height[right]
        let area = getArea(right - left, Math.min(lNum, rNum))
        max = Math.max(area, max)
        if(lNum > rNum) {
            right --
        }else {
            left ++
        }
    }
    return max
}