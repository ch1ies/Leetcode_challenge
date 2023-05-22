/**
 * 
 * @param {*} nums 生序数组 
 */
function deleteRepeatedItem(nums) {
    if (!Array.isArray(nums)) {
        return new Error('请输入一个数组')
    }
    let map = {}; // 去重的数据结构
    let newArray = [] // 新数组
    for (let i = 0; len = nums.length, i < len; i++) {
        if (map[nums[i]] || map[nums[i]] === 0) {
            continue
        } else {
            map[nums[i]] = i;
            newArray.push(nums[i])
        }
    }
    
    console.log('newArray: ', newArray);
    return newArray.length
}

// const nums = [1,1,2]; // 输出2
// const nums = [0,0,1,1,1,2,2,3,3,4]
// console.log('deleteRepeatedItem(nums): ', deleteRepeatedItem(nums));


// 过程
// 使用 对象数据结构作为映射，来筛选重复大项
// 在判断重复项的时候， 没有考虑到 属性值为0的情况，也要包含进去

// 伙伴评价
// 比较好的实现了题目的输出新的长度的功能
// 但题目有个要求，改变原来数组，使得  assert nums[i] == expectedNums[i]; 所以应该在原数组上操作

// 总结
// 考虑其他解题方法
// 未更改元数组，需重写
function deleteRepeatedItem1(nums) {
    if (!Array.isArray(nums)) {
        return new Error('请输入一个数组')
    }
    if(nums.length === 0) {
        return nums
    }
    let map = {}; // 去重的数据结构
    for (let i = 0; len = nums.length, i < len; i++) {
        if (map[nums[i]] !== undefined) {
            nums.splice(i, 1)
            i--
            continue
        } else {
            map[nums[i]] = i;
        }
    }
    
    console.log('nums: ', nums);
    return nums.length
}
const nums = [1,1,2]; // 输出2
// const nums = [0,0,1,1,1,2,2,3,3,4] // 输出 5
console.log('deleteRepeatedItem(nums): ', deleteRepeatedItem1(nums));
