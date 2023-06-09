/**
 * 两数相加 时间复杂度O(n)
 * @param {Array} l1 数组1
 * @param {Array} l2 数组2
 * @returns {Array} 求和之后的数组
 */

function addTwoNumbers(l1, l2) {
  let link1 = createLink(l1)
  let link2 = createLink(l2)
  let link3, unitNum = 0
  let t1 = link1, t2 = link2, t3 
  while(t1 || t2) {
    let num1 = t1 ? t1.val : 0, num2 = t2 ? t2.val : 0, sum = 0 
    if(num1 + num2 + unitNum > 9) {
        sum = (num1 + num2 + unitNum) % 10 
        unitNum = ~~((num1 + num2 + unitNum) / 10)
    }else {
        sum = num1 + num2 + unitNum
        unitNum = 0
    }
    let node = new Node(sum)
    if(!link3) {
        t3 = link3 = node
    }else {
        t3.next = node 
        t3 = node
    }
    t1 = t1 ? t1.next : null
    t2 = t2 ? t2.next : null
    if(!t1 && !t2 && unitNum) {
        node = new Node(unitNum)
        t3.next = node 
    }
  }
  return linkToArr(link3)
}
function Node(val) {
    this.val = val
    this.next = null
}
function createLink(arr) {
    let cur, head 
    for(let i = 0, len = arr.length; i < len; i++) {
        let node = new Node(arr[i])
        if(!head) {
            cur = head = node
        }else {
            cur.next = node 
            cur = node
        }
    }
    return head
}

function linkToArr(head) {
    let cur = head, ret = []
    while(cur) {
        ret.push(cur.val)
        cur = cur.next
    }
    return ret
}

// 输入：l1 = [2,4,3], l2 = [5,6,4] 输出：[7,0,8]
// 输入：l1 = [0], l2 = [0] 输出：[0]
// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] 输出：[8,9,9,9,0,0,0,1]

// 过程：
// try 1.由于链表求和逻辑复杂，思考了20分钟，然后求和判断没有加unitNum，导致第三种情况不能通过
// try 2.调整之后，第三种情况还是不能通过，原因是求和还有进位时，当链表遍历完成之后没有考虑
// try 3.成功了

// 伙伴评价
// 当书写逻辑复杂时，可以加上注释

// 感悟总结：
// 1.添加注释
// 2.考虑边界情况
// 3.相同逻辑出现两次及以上，且较长的表达式需要抽离
// 4. 结合以上几点问题，重写一个功能函数

/**
 * 两数相加 问题重构
 */
function addTwoNumbers(l1, l2) {
    function Node(val) {
        this.val = val 
        this.next = null
    }
    function createLink(arr) {
        let head = null, cur = null 
        for(let i = 0, len = arr.length; i < len; i++) {
            let node = new Node(arr[i])
            if(!head) {
                cur = head = node
            }else {
                cur.next = node 
                cur = node 
            }
        }
        return head
    }
    function fromLinkToArr(head, ret = []) {
        if(!head) {
            return ret
        }
        let cur = head 
        while(cur) {
            ret.push(cur.val)
            cur = cur.next
        }
        return ret
    }
    function notArr(arr) {
        return !Array.isArray(arr)
    }
    if(notArr(l1) || notArr(l2)) {
        console.log('参数必须为数组')
        return false
    }
    let link1 = createLink(l1)
    let link2 = createLink(l2)
    let link3 = null, cur3 = null
    let cur1 = link1, cur2 = link2
    let carry = 0
    while(cur1 || cur2) {
        let num1 = cur1 && cur1.val || 0
        let num2 = cur2 && cur2.val || 0
        let sum = num1 + num2 + carry
        carry = Math.floor(sum / 10)
        let final = sum % 10
        let node = new Node(final)
        if(!link3) {
           cur3 = link3 = node
        }else {
            cur3.next = node 
            cur3 = node 
        }
        cur1 = cur1 && cur1.next || null 
        cur2 = cur2 && cur2.next || null 
        if(!cur1 && !cur2 && carry) {
            cur3.next = new Node(carry) 
        }
    }
    console.log(link3) // 生成的链表
    return fromLinkToArr(link3)
}