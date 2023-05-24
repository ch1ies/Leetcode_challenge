/**
 * 合并两个有序链表
 * @param {Arrat} l1 输入的数组1
 * @param {Arrat} l2 输入的数组2
 * @returns {Array} 返回的数组
 */
function mergeLink(l1, l2) {
	if(!Array.isArray(l1) || !Array.isArray(l2)) {
			return console.log('请输入合法参数')
	}
	function Node(val) {
			this.val = val 
			this.next = null 
	}
	function createLink(arr) {
			let head = null, cur = null
			for(let i = 0, len = arr.length; i < len; i++) {
					let n = new Node(arr[i])
					if(!head) {
							head = cur = n 
					}else {
							cur.next = n 
							cur = n 
					}
			}
			return head 
	}
	let link1 = createLink(l1) 
	let link2 = createLink(l2)
	function merge(link1, link2) {
			let link3 = t3 = null 
			let t1 = link1, t2 = link2 
			while(t1 || t2) {
					let val = null 
					if(t1 === null) {
							val = nodeVal(t2); t2 = nodeNext(t2) 
					}else if(t2 === null) {
							val = nodeVal(t1); t1 = nodeNext(t1) 
					}else if(nodeVal(t1) > nodeVal(t2)) {
							val = nodeVal(t2); t2 = nodeNext(t2) 
					}else {
							val = nodeVal(t1); t1 = nodeNext(t1) 
					}
					let n = new Node(val) 
					if(!link3) {
							link3 = t3 = n 
					}else {
							t3.next = n 
							t3 = n 
					}
			}
			return link3 
	}
	function nodeVal(node) {
			return node ? node.val : null
	}
	function nodeNext(node) {
			return node && node.next || null 
	}
	function linkToArr(head) {
		let cur = head, arr = [] 
		while(cur) {
			arr.push(cur.val)
			cur = cur.next
		}
		return arr
	}
	let ret = linkToArr(merge(link1, link2)) 
	return ret
}



// 输入：l1 = [1,2,4], l2 = [1,3,4] 输出：[1,1,2,3,4,4]
// 输入：l1 = [], l2 = [] 输出：[]
// 输入：l1 = [], l2 = [0] 输出：[0]


// 过程：
// try 1. while(t1 || t2) { 里面的判断条件有误，导致了null的情况一直循环，造成死循环
// try 2.l1 = [], l2 = [0] 输出：[null] 是nodeVal函数里node && node.val || null 有问题，改为node && node.next || null 
// try 3.成功

// 伙伴评价


// 感悟总结：

/**
 * 合并两个有序链表 重构
 */
function mergeLink(l1, l2) {
	// 待实现
}