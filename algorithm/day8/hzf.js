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
    // 这里的ret数组换成字符串，逻辑里做拼加效果也可以
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
// 好：手动实现了数组反转

// 感悟总结：
// 对情况的多样性缺乏考虑，对js的Math方法不熟，Math.sign还是通过查阅之后才会的
// 思考和观察之后，对逻辑进行重写

/**
 * 整数反转
 */
function reverseNum(num) {
    if(typeof num !== 'number') {
        return console.log('请输入数字')
    }
    function isInvalid(n) {
        let rangeL = - (2 ** 31)
        let rangeR = 2 ** 31 - 1
        return n < rangeL || n > rangeR
    }
    let retNum = 0
    while(num !== 0) {
        let digit = num % 10 
        num = ~~(num / 10)
        retNum = retNum * 10 + digit
        if(isInvalid(retNum)) {
            return 0
        }
    }
    return retNum
}