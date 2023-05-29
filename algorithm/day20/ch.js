/**
 * 
 * @param {*} prices 
 */
function findBestTimeForSaleStock(prices) {
    if (!Array.isArray(prices)) {
        return new Error('请输入一个数组')
    }
    let max = 0
    let res = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i] && prices[j + 1]) { // 增加边界判断，数组访问
                max = Math.max(prices[j], prices[j + 1]) // 每一圈都进行比较
            }
        }
        res = Math.max(res, max - prices[i])
    }
    return res
}

// const prices = [7,1,5,3,6,4] // 输出 5
const prices = [7,6,4,3,1] // 输出 0
console.log('findBestTimeForSaleStock(prices): ', findBestTimeForSaleStock(prices));

// 过程
// 在比较 Math.max(prices[j], prices[j + 1]) 没有考虑边界情况，导致数组访问索引溢出
// 增加边界判断条件，成功

// 伙伴评价
// 比较好的实现了题目所需功能
// 但是时间复杂度可以再降低一点

// 总结
// 时间复杂度为O(n^2), 看是否有优化的算法

function findBestTimeForSaleStock1() {
    // 待实现
}