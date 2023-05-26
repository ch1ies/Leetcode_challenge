/**
 * 爬楼底- 动态规划
 * @param {*} n 
 */
function climbLadder(n) {
    if(typeof n !== 'number') return;
    if (n === 1) return 1
    if (n === 2) return 2
    // 优化的地方： 保存求解过的值
    return climbLadder(n - 1) + climbLadder(n - 2)
}
console.log('climbLadder(3): ', climbLadder(3)); // 3
// console.log('climbLadder(10): ', climbLadder(10)); // 89


// 过程
// 1. 可以用动态规划的思路去保存求解过的值

// 伙伴评价
// 比较好的实现了功能，可以尝试多种解法


// 总结

