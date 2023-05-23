function LinkNode(value) {
    this.value = value;
    this.next = null;
}

// 数组转链表
function CreateLinked(arr){
    let head, cur
    for (let i = 0; i < arr.length; i++) {
        const node = new LinkNode(arr[i]);
        if (!head) {
            head = cur = node
        } else {
            // 顺序不能反
            cur.next = node
            cur = node 
        }
    }
    return head
}

// 链表转数组
function linkToArr(link) {
    let res = []
    let cur = link
    while (cur) {
        res.push(cur.value)
        cur = cur.next
    }
    return res
}
const arr = [1,2,3,4,5]
const linkedRes = CreateLinked(arr)
const res = linkToArr(reverseLinked(linkedRes))
console.log('res: ', res); // 输出  [ 5, 4, 3, 2, 1 ]

// 反转链表
// 迭代
function reverseLinked(head) {
    let prev = null;
    let curr = head;
    while(curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr
        curr = next
    }
    return prev
}

// 递归
function reverseLinked1(head) {
    if (head == null || head.next == null) {
        return head
    }
    const newRead = reverseLinked1(head.next);
    head.next.next = head;
    head.next = null
    return newRead
}

// 过程
// 在创建连表的时候发现还是不太熟悉
// 看了官方解答后，才写出反转的逻辑


// 伙伴评价


// 总结
// 对链表这种数据结构多总结，了解其特性和应用的场景

