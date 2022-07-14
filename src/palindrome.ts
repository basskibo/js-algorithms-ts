
// declare function palindrom(inputString: string): boolean;
export const isPalindrom = (inputString: string): boolean => {
    let palindrom = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        palindrom += inputString[i];
    }
    if (palindrom === inputString) {
        return true
    }
    return false;
}

// palindrom("Bojan") // false
// palindrom("aabbaa") //true
// palindrom("balab") // true