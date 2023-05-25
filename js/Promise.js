// 实现Promise.all
// 所有Promise成功才算成功
function PromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let res = []
        let count = 0;
        for (let i = 0; i < promises.length; i++) {
            promises[i].then((result) => {
                res[i] = result;
                count++;
                if (count === promises.length) {
                    resolve(res)
                }
            }).catch((err) => {
                reject(err)
            })
        }
    })
}

// 实现Promise.race
// 有一个Promise成功，就算成功
function PromiseRace(promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises.then((result) => {
                resolve(result)
            }).catch((error) => {
                reject(error)
            })
        }
    })
}

// 实现 Promise.any
// 1. 有一个成功都成功，2. 所有失败了抛出失败
function promiseAny(promises) {
    return new Promise((resolve, reject) => {
        let errors = []
        let count = 0
        for (let i = 0; i < promises.length; i++) {
            promise[i].then((result) => {
                resolve(result)
            }).catch((err) => {
                errors.push(err);
                count++
                if (count === promises.length) {
                    reject(new AggregateError(errors))
                }
            })
        }
    })
}





// 实现Promise

// 实现Promise.then
