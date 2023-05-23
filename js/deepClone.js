/**
 * 深拷贝
 * 1.考虑自引用
 */
// 1. 使用 MessageChannel 实现
const obj = { name: 'vary', age: 12, c: { name: 'chiles'}}

function deepCopy(obj) {
    return new Promise((resolve, reject) => {
        const { port1, port2 } = new MessageChannel
        port1.postMessage(obj)
        port2.onmessage = (e) => {
           resolve(e.data)
        }
    })
}
deepCopy(obj).then(res => {
    console.log('res: ', res);
})


// 2. 基本的深拷贝
function deepCopy1(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let newObj = Array.isArray(obj) ? [] : {};
    for(let key in obj) {
        newObj[key] = deepCopy1(obj[key])
    }
    return newObj
}

deepCopy1(obj)
console.log('deepCopy1(obj): ', deepCopy1(obj));