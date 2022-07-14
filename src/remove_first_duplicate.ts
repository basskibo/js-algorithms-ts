export const removeFirstDuplicate = (a: number[]) => {
    const x = new Set<Number>()
    for (const num of a) {
        if (x.has(num)) {
            return num
        } else {
            x.add(num)
        }
    }
    return -1
}

// export default {removeFirstDuplicate} 
console.log(removeFirstDuplicate([1, 2, 3, 4, 5, 4, 3, 2])) //4
console.log(removeFirstDuplicate([1, 2, 3, 24, 242, 21, 2])) //2
removeFirstDuplicate([1, 1, 1, 1, 1, 1]) // 1
removeFirstDuplicate([0, 1, 2, 4]) // -1
removeFirstDuplicate([7]) // -1