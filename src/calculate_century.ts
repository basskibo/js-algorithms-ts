export const century = (year: number) => {
    const cent = year / 100;
    return Math.ceil(cent)
}


century(1969) //20
century(2020) //21
century(1419) //15