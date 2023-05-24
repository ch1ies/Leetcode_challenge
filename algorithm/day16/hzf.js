/**
 * 翻转链表
 * @param {Arrat} head 输入的数组
 * @returns {Array} 返回的数组
 */
function reverseLink(nums) {
	function Node(val) {
		this.val = val
		this.next = null
	}
	function createLink(arr) {
		let head = null, cur = null
		for(let i = 0, len = arr.length; i < len; i++) {
			let n = new Node(arr[i])
			if(!head) {
				cur = head = n
			}else {
				cur.next = n 
				cur = n 
			}
		}
		return head
	}
	function reverse(head) {
    let prev = null, cur = head
		while(cur) {
			let temp = cur.next 
			cur.next = prev
			prev = cur
			cur = temp
		}
		return prev
	}
	function linkToArr(head) {
		let arr = [], cur = head
		while(cur) {
			arr.push(cur.val)
			cur = cur.next
		}
		return arr
	}
	let link = createLink(nums)
	let rLink = reverse(link)
	return linkToArr(rLink)
}



// 输入：head = [1,2,3,4,5] 输出：[5,4,3,2,1]
// 输入：head = [1,2] 输出：[2,1]
// 输入：head = [] 输出：[]



// 过程：
// try 1.linkToArr的方法里，忘记对cur = cur.next进行迭代，造成死循环，低级失误
// try 2.成功

// 伙伴评价


// 感悟总结：
// 此类问题多练手，然后尝试找不同解法

/**
 * 翻转链表 重构
 */
function reverseLink(nums) {
	if(!Array.isArray(nums)) {
		return console.log('请输入正确参数')
	}
	function Node(val) {
		this.val = val 
		this.next = null
	}
	function createLink(arr) {
		let head, cur 
		for(let i = 0, len = arr.length; i < len; i++) {
			let n = new Node(arr[i])
			if(!head) {
				head = cur = n 
				continue
			}
			cur.next = n 
			cur = n 
		}
		return head
	}
	function rever(link) {
		if(link.next === null || link === null) {
			return link
		}
		let newHead = rever(link.next)
		link.next.next = link 
		link.next = null
		return newHead
	}
	return rever(createLink(nums))
}