/**
 * 深度优先，广度优先，遍历虚拟节点
 */
// DFS 深度优先
 function dfs(node) {
    console.log(node.value);
    node.children.forEach(child => dfs(child))
 }

 // BFS 广度优先
 function bfs(node) {
    const queue = [node]
    while(queue.length > 0) {
        const cur = queue.shift();
        console.log(cur.value);
        cur.children.forEach(child => queue.push(child))
    }
 }
const tree = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          { value: 4, children: [] },
          { value: 5, children: [] }
        ]
      },
      {
        value: 3,
        children: [
          { value: 6, children: [] },
          { value: 7, children: [] }
        ]
      }
    ]
  };
dfs(tree); // 1 2 4 5 3 6 7 
bfs(tree) // 1 2 3 4 5 6 7