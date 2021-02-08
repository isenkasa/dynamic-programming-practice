/*
Exercise: Write a function 'bestSum(targetSum, numbers)' that takes in
a targetSum and an array of numbers as arguments.

The function should return an array containing the shortest combination
of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return any one
of the shortest.
*/

/*
Time complexity: O(n^m * m)
Space complexity: O(m^2)
*/
const bestSum = (targetSum, numbers) => {
    // Base cases
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers)
    {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);

        if (remainderCombination !== null)
        {
            const combination = [...remainderCombination, num];
            // if the combination is shorter than the current shortest, update it
            if(shortestCombination === null || combination.length < shortestCombination.length)
                shortestCombination = combination;
        }
    }

    return shortestCombination;
};

/*
Time complexity: O(m^2 * n)
Space complexity: O(m^2)
*/
const bestSumMemoization = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    
    // Base cases
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers)
    {
        const remainder = targetSum - num;
        const remainderCombination = bestSumMemoization(remainder, numbers, memo);

        if (remainderCombination !== null)
        {
            const combination = [...remainderCombination, num];
            // if the combination is shorter than the current shortest, update it
            if(shortestCombination === null || combination.length < shortestCombination.length)
                shortestCombination = combination;
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

/*
Time complexity: O(m^2 * n)
Space complexity: O(m^2)
*/
const bestSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    // Base case
    table[0] = [];

    for (let i = 0; i <= targetSum; i++)
    {
        if (table[i] !== null)
        {
            for (let num of numbers)
            {
                const combination = [ ...table[i], num];
                
                // If this current combination is shorter than what is already stored
                if (!table[i + num] || table[i + num].length > combination.length)
                    table[i + num] = combination;
            }
        }
    }

    return table[targetSum];
}

// Memoization examples
console.log('Memoization');
console.log(bestSumMemoization(7, [5, 3, 4, 7]));
console.log(bestSumMemoization(8, [2, 3, 5]));
console.log(bestSumMemoization(8, [1, 4, 5]));
console.log(bestSumMemoization(100, [1, 2, 5, 25]));

// Tabluation examples
console.log('Tabulation');
console.log(bestSumTabulation(7, [5, 3, 4, 7]));
console.log(bestSumTabulation(8, [2, 3, 5]));
console.log(bestSumTabulation(8, [1, 4, 5]));
console.log(bestSumTabulation(100, [1, 2, 5, 25]));