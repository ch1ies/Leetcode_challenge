// 冒泡排序
function bubbleSort(arr) {
  for(let i = 0, len = arr.length; i < len - 1; i++) { 
    for(let j = 0; j < len - i - 1; j++) { 
      if(arr[j] > arr[j + 1]) { 
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// 选择排序
function selectionSort(arr) {
  for(let i = 0, len = arr.length; i < len - 1; i++) {
    let min = arr[i]
    for(j = i + 1; j < len; j++) {
      if(arr[j] < arr[min]) {
        [arr[j], arr[min]] = [arr[min], arr[j]]
      }
    }
  }
  return arr
}
// 快速排序
function quickSort(arr) {
  let left = [], right = []
  let midInx = Math.floor(arr.length / 2)
  let mid = arr.splice(midInx, 1)[0]
  for(let i = 0, len = arr.length; i < len; i++) {
    if(arr[i] > mid) {
      right.push(arr[i])
    }else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat([mid], quickSort(right))
}

// 堆排序 （普通二叉树-父求子，大顶堆）
function heapSort(arr) {
  function maxHeap(arr, i, size) { 
      let l = 2 * i + 1 
      let r = 2 * i + 2 
      let max = i 
      if(l <= size && arr[l] > arr[max]) {
          max = l 
      }
      if(r <= size && arr[r] > arr[max]) {
          max = r 
      }
      if(max !== i) {
          [arr[max], arr[i]] = [arr[i], arr[max]] 
          maxHeap(arr, max, size)
      }
  }
  let n = arr.length 
  for(let i = Math.floor(n / 2); i >= 0; i--) {
      maxHeap(arr, i, n) 
  }
  for(let j = 0; j < n; j++) {
      let t = n - j - 1; 
      [arr[t], arr[0]] = [arr[0], arr[t]] 
      maxHeap(arr, 0, t - 1) 
  }
  return arr 
}