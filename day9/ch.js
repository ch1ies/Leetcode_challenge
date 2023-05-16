/**
 * 找出盛最多水的容器
 * @param {*} nums 
 */
function findMostCapacityBox (nums) {
    if (!Array.isArray(nums)) {
        return new Error('请输入一个数组')
    }
    let len = nums.length;
    let pivot = 0 // 循环开始的值，默认指向第一个
    let move = 0 // 每次移动的距离、
    let capacity = 0 // 容器
    let record = [] // 记录匹配的容器和
    // 返回小的那一个数字
    function compareTowNum(num1, num2) {
        return num1 > num2 ? num2 : num1
    }
    while(pivot < len) {
        let sum =(move - pivot) * (compareTowNum(nums[move], nums[pivot]))
        record.push({
            sum,
            pivot,
            move
        })
        if (sum > capacity) {
            capacity = sum
        }
        move++
        if (move >= len) { // 一圈循环到底，开始第二圈
            pivot++;
            move = pivot
        }
    }
    console.log('record:', record)
    return capacity
}

// const nums = [1,8,6,2,5,4,8,3,7] // 49
const nums = [1,8,6,2,3,7] // 28
console.log('findMostCapacityBox(nums): ', findMostCapacityBox(nums));

// 过程
// 1. 对于指针移动的边界条件需考虑清楚
// 2.核心在于每次循环比较每次数组的容量，找到最大容量

// 伙伴评价
// 比较好的算法逻辑，实现了功能
// 建议 1.命名上，sum建议用area或者product 2.从record里观察，多循环了height.length 次 3.compareTowNum 函数可以用Math.min(n1, n2)替代

// 总结
// 使用双指针完成了题目，思考否有复杂度小的算法
// 1. 修改变量名
// 2. 使用Math.min 方法
// 3. 思考：如何减少循环次数

function findMostCapacityBox2() {
    // 重构
}