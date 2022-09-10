/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    if (grid.length < 1) return 0;

    const rows = grid.length;
    const cols = grid[0].length;

    const visited = new Set();
    let islandCount = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        visited.add([r, c]);
        bfs(r, c);
        islandCount++;
      }
    }
};

function bfs (r, c) {
  let queue = [];
  queue.push([r, c]);
  visited.add([r, c]);
  
  while(queue.length) {
    
  }
}