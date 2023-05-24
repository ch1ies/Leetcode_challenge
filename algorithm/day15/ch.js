/**
 * 括号生成
 * @param {*} num 
 */
function generateBracket(num) {
    const bracket = ['(', ')']
    // 生成对应的括号
    const container = [];
    for (let i = 0; i < num; i++) {
        container.push(...bracket)
    }
    // 生成括号所有排列的可能性，从中进行筛选
    for (let i = 0; i < num*2; i++) {
        for (let j = 0; j < container.length; j++) {

        }
    }
    console.log('container: ', container);
}

generateBracket(3)



function generateBracket1(num) {
    const container = []
    function gen(A) {
        if (A.length === 2*num) {
            if (valid(A)) {
                container.push(A.join(''))
            }
        } else {
            A.push('(')
            gen(A)
            A.pop() // 记得出栈
            A.push(')')
            gen(A)
            A.pop()
        }
    }
    function valid(arr) {
        // console.log('arr: ', arr);
        let bol = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '(') {
                bol++
            } else {
                bol--
            }
            if (bol < 0) return false
        }
        return bol === 0
    }
    gen([])
    return container
}
generateBracket1(3)

// 过程
// 实现的时候想到了解决思路，先生成所有的情况，在进行筛选，但是没有想到好的方法
// 看了官方答案，才想到使用递归

// 伙伴评价
// 逻辑较好的实现了功能

// 总结
// 对使用递归解题的思路进行加强训练