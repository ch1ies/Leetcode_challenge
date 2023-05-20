/**
 * 
 * @param height 
 */
function pickerWaterContainer(height) {
    if (!Array.isArray(height)) {
        return new Error('请输入一个数组')
    }
    let min = 0 // 前指针
    let max = 0 // 后指针
    let container = []
    while (max < height.length - 1) {
        if (height[max] > height[max+1]) {
            container.push({
                index: max,
                value: height[max]
            })
        }
        max++
    }
    for (let i = 0; i < container.length; i++) {
        // if (container[i].value)
    }
    console.log('container: ', container);
}

// console.log('pickerWaterContainer(height): ', pickerWaterContainer(height));



function pickerWaterContainer1(height) {
    let ans = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0; // 前后指针
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]) {
            ans += leftMax - height[left];
            ++left;
        } else {
            ans += rightMax - height[right];
            --right;
        }
    }
    return ans;
}
const height = [0,1,0,2,1,0,1,3,2,1,2,1]

pickerWaterContainer1(height)
console.log('pickerWaterContainer1(height): ', pickerWaterContainer1(height));

// 过程：
// 想使用前后双指针解题，但是找到前后边界之间的关系，未能实现，看了官方实现

// 伙伴评价


// 总结
// 1. 多联系此类题型
// 2. 尝试多种解法： 动态规划，双指针，栈