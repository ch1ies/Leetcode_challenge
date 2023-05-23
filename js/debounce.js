/**
 * 实现防抖和节流
 */

function debounce(fn, delay) {
    let timerId = null;
    return function() {
        let context = this; // 保存this 指向
        let args = arguments; // 拿到event 对象
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const test = (name) => {
    console.log('name: ', name);
}

const fn1 = debounce(test, 2000)
fn1(1)

// 节流- 时间戳实现
function throttle(fn, delay = 500) {
    let oldTime = Date.now()
    return function(...args) {
        let nowTime = Date.now()
        if (nowTime - oldTime >= delay) {
            fn.apply(null, args)
            oldTime = Date.now()
        }
    }
}