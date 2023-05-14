/**
 * 整数反转
 * @param {number} num 输入的整数
 * @returns {number} 满足条件的整数
 */
function reverseNum(num) {
    if(typeof num !== 'number') {
        return console.log('请输入数字')
    }
    let sign = Math.sign(num)
    let nStr = Math.abs(num) + ''
    let nLen = nStr.length 
    if(nLen === 1) {
        return num 
    }
    let ret = [], count = 0 
    while(count < nLen) {
        ret[count] = nStr[nLen - 1 - count]
        count ++
    }
    return sign * ret.join('') 
}


// 输入：x = 123 输出：321
// 输入：x = -123 输出：-321
// 输入：x = 120 输出：21
// 输入：x = 0 输出：0



// 过程：
// try 1.第一遍写的很顺利，但是输入值为负数的不通过
// try 2.加上负数的逻辑之后，成功

// 伙伴评价


// 感悟总结：
// 对情况的多样性缺乏考虑，对js的Math方法不熟，Math.sign还是通过查阅之后才会的

/**
 * 整数反转
 */
function reverseNum(num) {
    // 待实现
}