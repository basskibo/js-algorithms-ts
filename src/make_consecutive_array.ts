export const getNumberOfMissingConsecutive = (numbers: number[]) => {
    const min: number = Math.min.apply(Math, numbers);
    const max: number = Math.max.apply(Math, numbers);
    return (max - min + 1) - numbers.length;
}