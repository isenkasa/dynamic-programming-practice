/*
Exercise: Say that you are a traveler on a 2D grid. You begin in the top-left corner
and your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n?

Write a function 'gridTraveler(m, n)' that calculates this.
*/

/*
Time complexity: O(2^(n+m))
Space complexity: O(n + m)
*/
const gridTraveler = (m, n) => {
    // Base cases
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

/*
Time complexity: O(m * n)
Space complexity: O(n + m)
*/
const gridTravelerMemoized = (m, n, memo = {}) => {
    const key = m + ',' + n;
    // Are the arguments in the memo?
    if (key in memo) return memo[key];
    
    // Base cases
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    // Store in the memo
    memo[key] = gridTravelerMemoized(m - 1, n, memo) + gridTravelerMemoized(m, n - 1, memo);
    return memo[key];
};

/*
Time complexity: O(m * n)
Space complexity: O(m * n)
*/
const gridTravelerTabulation = (m, n) => {
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));

    // Base case
    table[1][1] = 1;

    // Loop through the table
    for (let i = 0; i <= m; i++)
    {
        for (let j = 0; j <= n; j++)
        {
            const current = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }

    return table[m][n];
}

// Example instances - Memoization
console.log("Memoization");
console.log(gridTravelerMemoized(1, 1));
console.log(gridTravelerMemoized(2, 3));
console.log(gridTravelerMemoized(3, 2));
console.log(gridTravelerMemoized(3, 3));
console.log(gridTravelerMemoized(18, 18));

console.log("Tabulation");
// Example instances - Tabulation
console.log(gridTravelerTabulation(1, 1));
console.log(gridTravelerTabulation(2, 3));
console.log(gridTravelerTabulation(3, 2));
console.log(gridTravelerTabulation(3, 3));
console.log(gridTravelerTabulation(18, 18));