import { century } from "./calculate_century.js"
import { calculateFibonacci } from "./fibonacci.js"
import { isPalindrom } from "./palindrome.js"
import { removeFirstDuplicate } from "./remove_first_duplicate.js"
import { getNumberOfMissingConsecutive } from "./make_consecutive_array.js"
import promptly from 'promptly'

(async () => {

    const choice: String = await promptly.choose('Run example: \n 1. get fibonacci number \n 2. calculate century \n 3. check if palindrom \n 4. get first duplicate \n 5. find number of missing for consecutive array \n Choice: ',
        ['1', '2', '3', '4', '5']);
    let example: string;
    switch (choice) {
        case '1':
            console.log('Starting fibonacci example...')
            const number: string = await promptly.prompt('Enter number: ', { retry: true });
            const fibonacciNum = calculateFibonacci(parseInt(number))
            console.log(`\nFibonnaci number is : ${fibonacciNum}`)
            break;
        case '2':
            console.log('Starting calculate century example...')
            const year: string = await promptly.prompt('Enter year: ', { retry: true });
            const centuryYearIsFrom = century(parseInt(year))
            console.log(`\nYear ${year} is from ${centuryYearIsFrom}th century`)
            break;
        case '3':
            console.log('Starting palindrom example...')
            const word: string = await promptly.prompt('Enter word: ', { retry: true });
            const palindrom: boolean = isPalindrom(word)
            console.log(`\nWord ${word} ${palindrom ? 'is' : 'is not'} palindrom `)
            break;
        case '4':
            console.log('Starting get first duplicate example...')
            const numberArray: string = await promptly.prompt('Enter numbers seperated by comma (if none is found -1 will be reutrned): ', { retry: true });
            const numbersSplitted = numberArray.split(',')
            const numArr: number[] = [];
            numbersSplitted.forEach(num => {
                numArr.push(parseInt(num))
            })
            const firstDuplicate = removeFirstDuplicate(numArr)
            console.log(`\nFirst duplicate is  ${firstDuplicate} `)
            break;
        case '5':
            console.log('Starting get number of missing for consecutive example...')
            const listOfNums: string = await promptly.prompt('Enter numbers seperated by comma: ', { retry: true });
            const listOfNumsSplitted = listOfNums.split(',')
            const listOfNumbers: number[] = [];
            listOfNumsSplitted.forEach(num => {
                listOfNumbers.push(parseInt(num))
            })
            const numOfMissing = getNumberOfMissingConsecutive(listOfNumbers)
            console.log(`\n ${numOfMissing} numbers missing in order for array to be consecutive `)
            break;
    }


})();



