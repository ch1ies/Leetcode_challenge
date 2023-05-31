/**
 * 打家劫舍
 * @param {*} arr 
 */
function thiefMaster(arr) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            even += arr[i]
        } else {
            odd += arr[i]
        }
    }
    return Math.max(even, odd)
}

// const arr = [1,2,3,1] // 输出 4
const arr = [2,7,9,3,1] // 输出 12
console.log('thiefMaster(arr): ', thiefMaster(arr));

// 总结
// 将数组按照奇偶性分组后相加，取最大的值


// 伙伴评价


// 总结
// 尝试其他解决方法
function thiefMaster1 () {
    // 待实现
}

