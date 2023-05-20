/**
 * 接雨水
 * @param {Array} height 输入的雨水数组
 * @returns {number} 储水量
 */
function catchRain(height) {
    if(!Array.isArray(height)) {
        return console.log('请输入合法参数')
    }
    let leftArr = [], rightArr= []
    let len = height.length, sum = 0
    for(let i = 0; i < len; i++) {
        if(!i) {
            leftArr[i] = height[i]
        }else {
            leftArr[i] = Math.max(leftArr[i - 1], height[i])
        }
    }
    for(let i = len - 1; i >= 0; i--) {
        if(i === len - 1) {
            rightArr[i] = height[i]
        }else {
            rightArr[i] = Math.max(rightArr[i + 1], height[i])
        }
    }
    for(let i = 0; i < len; i++) {
        sum += Math.min(leftArr[i], rightArr[i]) - height[i]
    }
    return sum
}

// height = [0,1,0,2,1,0,1,3,2,1,2,1] 输出：6
// height = [4,2,0,3,2,5] 输出：9



// 过程：
// try 1.想了半天，自己的方式不行，看了官方的思路，写出来了逻辑


// 伙伴评价
// 对于这类问题多总结，也可查看不同解法

// 感悟总结：
// 这类题目还是比较有难度，多加揣摩和练习

/**
 * 接雨水 重构
 */
function catchRain(height) {
    
}
