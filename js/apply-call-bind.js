/**
 * 实现 apply, call, bind
 */

//1. 修改this 指向
//2. 动态传递参数
//3. 兼容new关键字
//4. 返回函数
Function.prototype.myBind = function(context){
    // 非函数调用报错
    if (typeof this !== 'function') {
        return new TypeError('Error')
    }

    // 获取context 后的参数
    const args = [...arguments].slice(1)
    const fn = this;
    return function Fn() {
        // 根据调用方式，传入不同的绑定值
        const params = args.concat([...arguments])
        return fn.apply(this instanceof Fn ? new fn(...arguments) : context, params)
    }
}
// 此处不能使用箭头函数，如果使用，this在node 环境中指向 {}
function fn (name) {
    console.log('name: ', name);
    console.log('this: ', this);
    console.log('name: ', this.name);
}
const obj = { name: '123'}

// fn.myBind(obj, 1, 2)(3)


Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        return new TypeError('error')
    }
    context = context || window
    const fn = Symbol();
    context[fn] = this; // 保存函数引用, 以及this
    const args = [...arguments].slice(1)
    console.log('args: ', ...args);
    const result = context[fn](...args)
    delete context[fn]
    return result
}

// fn.myCall(obj, '123344')

Function.prototype.myApply = function(context) {
    if (typeof this !== 'function') {
        return new TypeError('error')
    }
    context = context || window
    const fn = Symbol();
    context[fn] = this; // 保存函数引用, 以及this
    const args = [...arguments].slice(1)
    const result = context[fn](args)
    delete context[fn]
    return result
}
fn.myApply(obj, [1,2,3])
