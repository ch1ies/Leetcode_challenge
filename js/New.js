/**
 * 实现 new 关键字做的事情
 * 1. 首先创建一个空对象，这个对象会作为执行new构造函数之后返回的对象实例，
 * 2. 将创建的空对象原型（__proto__）指向构造函数的prototype属性，
 * 3. 同时将这个空对象赋值给构造函数内部的this，并执行构造函数逻辑，
 * 4. 根据构造函数的执行逻辑，返回初始创建的对象或构造函数的显式返回值。
 */

function MyNew(...args) {
    const constructor = args.shift();
    const obj = Object.create(constructor.prototype);
    const result = constructor.apply(obj, args);
    return typeof result === 'object' && result !== null ? result : obj
}


function Test(name) {
    this.name = name;
}
const obj = MyNew(Test, 'vary');
console.log('obj: ', obj.name);