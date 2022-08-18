let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startgame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}



function rendergame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You win!"
        hasBlackJack = true
    } else {
        message = "You are out of this game"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
 }

 function newcard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        rendergame()
    }
 }