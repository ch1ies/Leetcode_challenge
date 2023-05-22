/**
 * 深度克隆的方式
 * @param {*} obj 
 * @returns 
 */
function deepCopy(obj){
	if (typeof obj !== 'object' || obj === null) return obj;
    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        newObj[key] = deepCopy(obj[key])
    }
    return newObj
}
const originalObject = { a: 1, b: { c: 2 }, d: [3, 4] };
const newObject = deepCopy(originalObject); // 深拷贝
console.log('newObject: ', newObject === originalObject);