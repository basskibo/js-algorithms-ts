let storedFibNums: any = {};

export const calculateFibonacci = (n: number): number => {
    if (n <= 1) return n;
    if (storedFibNums[n]) {
        return storedFibNums[n]
    }
    storedFibNums[n] = calculateFibonacci(n - 1) + calculateFibonacci(n - 2)
    return storedFibNums[n];
}
