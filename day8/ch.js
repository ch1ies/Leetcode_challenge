/**
 * 整数反转
 * @param {*} x 32 wei  
 */
function reserveNUm (x) {
    if(typeof x != 'number') {
        return new Error('请输入数字')
    }
    function reserveNormal (num) {
        return String(num).split('').reverse().join('')
    }
    let temNum = 0
    if (x === 0) {
        return 0
    } else if( x < 0) {
        temNum = Math.abs(x)
        const res =  reserveNormal(temNum)
        return '-' + res
        
    } else {
        if (String(x).endsWith('0')) {
            temNum= String(x).split('').slice(0, String(x).length -1).join('')
            return reserveNUm(Number(temNum))
        } else {
            return reserveNormal(x)
        }
        
    }
}

// x = 123  // 输出 321
// x = -123  // 输出 -321
// x= 0 // 输出 0
x = 120  // 输出21
console.log('reserveNUm(x): ', reserveNUm(x));

// 过程：
// 1. 使用了数组，数字，字符串对象山的属性和方法进行操作，对数组上的slice,splice 需加强认识
// 2. 核心逻辑是反转，其他边界条件通过判断在递归调用自身得到答案
// 3 没有对字符做 32位精度的判断


// 伙伴评价


// 总结
