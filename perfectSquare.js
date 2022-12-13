function perfectSquare (input) {
    let n = Math.sqrt(input)

    if(Number.isInteger(n)){
        return Math.pow(n+1,2)
    } else {
        return -1
    }
}

console.log(perfectSquare(3000))