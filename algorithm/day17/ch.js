/**
 * 合并两个有序链表
 * @param {*} arr1 
 * @param {*} arr2 
 */
function mergeLinked(arr1, arr2) {
    // const resArr = arr2
    // 暴力版，创建新的链表
    // for (var i = 0; i < arr1.length; i++) {
    //     let out = arr1[i].value;
    //     for (let j = 0; j < arr2.length; j++) {
    //         if (out >= arr2[j].value && out < arr1[j + 1].value) {
    //             arr2[j].next = out;
    //             out.next = arr2[j + 1];
    //         }
    //     }
    // }
    // return arr2;
    const head = arr2
    while(head) {

    }
}
// 使用递归
function mergeLinked1(l1, l2) {
    if (l1 === null) {
        return l2
    } else if(l2 === null) {
        return l1
    } else if (l1.value > l2.value) {
        l1.next = mergeLinked1(l1.next, l2)
        return l1
    } else {
        l2.next = mergeLinked1(l1, l2.next)
        return l2
    }
}

function LinkNode(val) {
    this.value = val;
    this.next = null
}

function createLinked(arr) {
    if (arr.length === 0 || !Array.isArray(arr)) {
        return new Error("请输入正确的数组")
    }
    let head, cur
    for(let i = 0; i < arr.length; i++) {
        const node = new LinkNode(arr[i])
        if (!head) {
            head = cur = node
        } else {
            cur.next = node;
            cur = node;
        }
    }
    return head
}
const l1 = createLinked([1,2,4])
const l2 = createLinked([1,3,4])
const res = mergeLinked1(l1, l2)
console.log('res: ', res);


// 过程
// 本来想使用迭代的方式实现，发现算法复杂度高，看了官当解答使用了递归

// 伙伴评价
// 比较好的实现了功能，可以尝试多种解法

// 总结
// 链表类的题目需要多做
