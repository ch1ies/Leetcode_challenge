/**
 * 两数之和 时间复杂度O(n)
 * @param {Array} nums 数组列表
 * @param {number} target 目标和
 * @returns {Array} 满足条件的一个结果
 */

function twoSum(nums, target) {
  let mapToInx = {}
  for(let i = 0, len = nums.length; i < len; i++) {
      if(mapToInx[nums[i]] !== undefined) {
          return [mapToInx[nums[i]], i]
      }
      mapToInx[target - nums[i]] = i 
  }
  return [] 
}

// nums = [2,7,15], target = 9  twoSum(nums, target)输出：[0, 1]
// nums = [3,2,4], target = 6 twoSum(nums, target)输出：[1, 2]
// nums = [3,3], target = 6 twoSum(nums, target)输出：[0, 1]

// 过程：
// 写了三遍，
// try 1. nums在逻辑中误写成了arr 
// try 2.判断和map赋值先后顺序相反，导致找到了自身的index，出错。其实也可以按照那个顺序，只不过需要额外加个判断不是自身index才去判断map的值是否为undefined 
// try 3.成功了

// 伙伴评价


// 感悟总结：