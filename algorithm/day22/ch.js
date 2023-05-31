/**
 * 寻找最长公共前缀
 * @param {*} strs 
 */
function findMostCommonPrefix(strs) {
    if(!Array.isArray(strs)) {
        return new Error('请输入字符串类型的数组')
    }
    // let res = ''
    let common = ''
    strs.forEach(function(item) {
        compareCommon(common || strs[0], item)
    })
    function compareCommon(res, item) {
        for (let i = 0; i < item.length; i++) {
           if (item[i] !== res[i]) {
            common = item.split('').splice(0, i).join('');
            break;
           }
        }
    }
    return common ? common : '';
}
// const strs = ["flower","flow","flight"] // 输出 fl
const strs = ["dog","racecar","car"] // 输出 ‘ ’
console.log('findMostCommonPrefix(strs): ', findMostCommonPrefix(strs));

// 过程
// 实现方式比较简单，维护一个最长前缀的字符串，依次进行比较

// 伙伴评价


// 总结
// 尝试使用其他方式

function findMostCommonPrefix1(strs) {
    // 待实现
}