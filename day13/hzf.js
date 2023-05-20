/**
 * 删除有序数组中的重复项
 * @param {Array} nums 输入的数字集合
 * @returns {Array} 输出的目标集合
 */
function delDuplicates(nums) {
    if(!Array.isArray(nums)) {
        return console.log('请输入合法参数')
    }
    let len = nums.length, ret = [], map = {}
    if(!len) {
        return [len, ret]
    }
    for(let i = 0; i < len; i++) {
        let num = nums[i]
        if(!map[num]) {
            ret.push(nums[i])
        }
        map[num] = true
    }
    return [ret.length, ret]
}
// 重写
function delDuplicates1(nums) {
    if(!Array.isArray(nums)) {
        return console.log('请输入合法参数')
    }
    let map = {}
    if(!nums.length) {
        return 0
    }
    for(let i = 0; i < nums.length; i++) {
        let n = nums[i], len = nums.length
        if(!i) {
            map[n] = true
        }else if(i < len - 1) {
            if(map[n]) {
                nums.splice(i, 1)
                i--
            }else {
                map[nums[i]] = true
            }
        }else if(i === len - 1){
            if(map[n]) {
                nums.splice(i, 1)
            }
        }
    }
    return nums.length
}

// 输入：nums = [1,1,2] 输出：2, nums = [1,2,_]
// 输入：nums = [0,0,1,1,1,2,2,3,3,4] 输出：5, nums = [0,1,2,3,4]



// 过程：
// try 1.虽然第一次的逻辑实现了输出结果，但是题目要求的是修改原数组，重新组织逻辑
// try 2.按照题目要求重写了一遍，成功


// 伙伴评价


// 感悟总结：
// 搞不懂 输出：2, nums = [1,2,_] 这个是啥意思
// 看清题意再写逻辑
// 不使用数组的api处理，寻找一种其他思路实现

/**
 * 删除有序数组中的重复项 重构 使用双指针
 */
function delDuplicates(nums) {
    if(!Array.isArray(nums)) {
        return console.log('请输入数组')
    }
    if(!nums.length) {
        return 0
    }
    let left = right = 1
    for(let i = 1, len = nums.length; i < len; i++) {
        if(nums[right] !== nums[right - 1]) {
            nums[left] = nums[right]
            left ++
        }
        right ++ 
    }
    nums.length = left
    return left
}