/*
Exercise: Write a function 'fib(n)' that takes in a number as an argument.
The function should return the n-th number of the Fibonacci sequence.

Additional Information: The 1st and 2nd number of the sequence is 1.
To generate the next number of the sequence, we sum the previous two.
*/

/*
Time complexity: O(2^n)
Space complexity: O(n)
*/
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

/*
Time complexity: O(n)
Space complexity: O(n)
*/
const fibMemoized = (n, memo = {}) => {
    // Check if the key is in the memo
    if (n in memo) return memo[n];

    // Otherwise, perform calculation
    if (n <= 2) return 1;
    memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
    return memo[n];
}

/*
Time complexity: O(n)
Space complexity: O(n)
*/
const fibTabulation = (n) => {
    const table = Array(n + 1).fill(0);

    // Base case
    table[1] = 1;

    // Iterate through table
    for(let i = 0; i <= n; i++)
    {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[n];
}

// Example instances - Memoization
console.log('Memoization');
console.log(fibMemoized(6));
console.log(fibMemoized(7));
console.log(fibMemoized(8));
console.log(fibMemoized(50));

// Example instances - Tabulation
console.log('Tabulation');
console.log(fibTabulation(6));
console.log(fibTabulation(7));
console.log(fibTabulation(8));
console.log(fibTabulation(50));