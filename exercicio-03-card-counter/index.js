let count = 0

const cardCounter = card => {
    if (card >= 2 && card <= 6) {
        count += 1
    }
    else if(card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
        count -=1
    }
    if (count > 0){
        return `${count} Bet`
    }else if (count <= 0){
        return `${count} Hold`
    }
}

console.log(cardCounter(2))
console.log(cardCounter(3))
console.log(cardCounter(4))
console.log(cardCounter(5))
console.log(cardCounter(6))
console.log(cardCounter(7))
console.log(cardCounter(8))
console.log(cardCounter(9))
console.log(cardCounter(10))
console.log(cardCounter("J"))
console.log(cardCounter("Q"))
console.log(cardCounter("K"))
console.log(cardCounter("A"))