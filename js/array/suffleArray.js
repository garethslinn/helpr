// Useage: shuffleArray([0,1,2,3,4,5,6])
// Output: [4,0,1,6,5,3,2]

export function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

console.log('x',shuffleArray([0,1,2,3,4,5,6]))