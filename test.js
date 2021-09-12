let firstCard = 0,
    secondCard = 0,
    thirdCard = 0,
    fourthCard = 0,
    fifthCard = 0,
    sixthCard = 0,
    seventhCard = 0,
    eighthCard = 0,
    ninthCard = 0,
    title = document.getElementById("messege-el"),
    cardsDisp = document.getElementById("cards"),
    sumCards = document.getElementById("sum"),
    button = document.getElementById("ctrl"),
    newG = 0,
    drawCardText = document.getElementById("draw-card"),
    playCheck = 0,
    cardsSum = document.getElementById("sum"),
    sumOfCards = 0,
    sd = 0,
    cardDealer = 0,
    displayDealerSum = 0,
    dealerDisplayText = document.getElementById("dealer")




function startGame() {

    console.log("started startGame()")
    button.textContent = "Start a new game"
    title.textContent = "Draw a card"
    if (newG === 1) {
        console.log("Started if newG")
        firstCard = 0
        secondCard = 0
        thirdCard = 0
        fourthCard = 0
        fifthCard = 0
        sixthCard = 0
        seventhCard = 0
        eighthCard = 0
        ninthCard = 0
        button.textContent = "Start game"
        title.textContent = "want to play a round?"
        cardsDisp.textContent = "cards:"
        cardsSum.textContent = "sum:"
        sumDealer = 0
        displayDealerSum = 0
        dealerDisplayText.textContent = "dealer sum: "
        cardDealer = 0

        newG = 0
        playCheck = 0
        sd = 0
        cardDealer = 0
        console.log("newG = " + newG)

    } else {

        newG = 1
        playCheck = 1
        firstCard = Math.floor(Math.random() * 10) + 2
        console.log("firstCard = " + firstCard)
        cardsDisp.textContent = "cards: " + firstCard
        sumOfCards = firstCard
        cardsSum.textContent = "sum: " + sumOfCards



    }

}



function drawCard() {


    if (sd === 0) {
        if (sumOfCards < 21) {
            if (playCheck === 1) {

                console.log("started playChech()")
                playCheck++
                secondCard = Math.floor(Math.random() * 10) + 2
                console.log("secondCard = " + secondCard)
                cardsDisp.textContent = "cards: " + firstCard + ", " + secondCard
                sumOfCards = firstCard + secondCard
                cardsSum.textContent = "sum: " + sumOfCards

                if (sumOfCards > 21) title.textContent = "You lost sum is " + sumOfCards
            } else if (playCheck === 2) {

                console.log("started playChech() 2")
                playCheck++
                thirdCard = Math.floor(Math.random() * 10) + 2
                console.log("thirdCard = " + thirdCard)
                cardsDisp.textContent = "cards: " + firstCard + ", " + secondCard + ", " + thirdCard
                sumOfCards = firstCard + secondCard + thirdCard
                cardsSum.textContent = "sum: " + sumOfCards

                if (sumOfCards > 21) title.textContent = "You lost sum is " + sumOfCards
            } else if (playCheck === 3) {

                console.log("started playChech() 3")
                playCheck++
                fourthCard = Math.floor(Math.random() * 10) + 2
                console.log("fourthCard = " + fourthCard)
                cardsDisp.textContent = "cards: " + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard
                sumOfCards = firstCard + secondCard + thirdCard + fourthCard
                cardsSum.textContent = "sum: " + sumOfCards

                if (sumOfCards > 21) title.textContent = "You lost... :("
            } else if (playCheck === 4) {

                console.log("started playChech() 4")
                playCheck++
                fifthCard = Math.floor(Math.random() * 10) + 2
                console.log("fifthCard = " + fifthCard)
                cardsDisp.textContent = "cards: " + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard
                sumOfCards = firstCard + secondCard + thirdCard + fourthCard + fifthCard
                cardsSum.textContent = "sum: " + sumOfCards

                if (sumOfCards > 21) title.textContent = "You lost... :("
            } else if (playCheck === 5) {

                console.log("started playChech() 5")
                playCheck++
                sixthCard = Math.floor(Math.random() * 10) + 2
                console.log("sixthCard = " + sixthCard)
                cardsDisp.textContent = "cards: " + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard + ", " + sixthCard
                sumOfCards = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard
                cardsSum.textContent = "sum: " + sumOfCards

                if (sumOfCards > 21) title.textContent = "You lost... :("
            } else if (playCheck === 6) {

                console.log("started playChech() 6")
                playCheck++
                seventhCard = Math.floor(Math.random() * 10) + 2
                console.log("seventhCard = " + seventhCard)
                cardsDisp.textContent = "cards: " + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard + ", " + sixthCard + ", " + seventhCard
                sumOfCards = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
                cardsSum.textContent = "sum: " + sumOfCards

                if (sumOfCards > 21) title.textContent = "You lost... :("
            } else if (playCheck === 7) {

                console.log("started playChech() 7")
                playCheck++
                eighthCard = Math.floor(Math.random() * 10) + 2
                console.log("eighthCard = " + eighthCard)
                cardsDisp.textContent = "cards: " + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard + ", " + sixthCard + ", " + eighthCard
                sumOfCards = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard + eighthCard
                cardsSum.textContent = "sum: " + sumOfCards

                if (sumOfCards > 21) title.textContent = "You lost... :("
            } else if (playCheck === 8) {

                console.log("started playChech() 8")
                playCheck++
                ninthCard = Math.floor(Math.random() * 10) + 2
                console.log("ninthCard = " + ninthCard)
                cardsDisp.textContent = "cards: " + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard + ", " + sixthCard + ", " + ninthCard
                sumOfCards = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard + eighthCard + ninthCard
                cardsSum.textContent = "sum: " + sumOfCards

                if (sumOfCards > 21) title.textContent = "You lost... :("
            }
        }
    }



}



function stopDraw() {

    console.log("started stopDraw")
    console.log("dealerSum is " + displayDealerSum)
    sd++
    dealerDisplayText.textContent = "dealer sum: "
    if (newG === 1) {

        while (displayDealerSum < 16) {
        cardDealer += Math.floor(Math.random() * 10) + 2
        console.log("cardDealer = " + cardDealer)
        displayDealerSum += cardDealer
        dealerDisplayText.textContent += cardDealer + " - "
        console.log("displayDealerSum " + displayDealerSum)
    }


    if (displayDealerSum > 21) {

        console.log("Dealer lost, his sum is " + displayDealerSum)
        dealerDisplayText.textContent += ">>> " + displayDealerSum + " " + "dealer lost"
        if (sumOfCards < 21) title.textContent = "You won! :)"
        else title.textContent = "Draw!"
    }

    else if (displayDealerSum < sumOfCards) {

        console.log("Dealer lost, his sum is " + displayDealerSum)
        dealerDisplayText.textContent += ">>> " + displayDealerSum + " " + "dealer lost"
        title.textContent = "You won! :)"

    }
    

    else {

        console.log("dealer won, his sum is " + displayDealerSum)
        dealerDisplayText.textContent += ">>> " + displayDealerSum + " " + "Dealer won"
        title.textContent = "You lost... :("

    } 
    }
    
    

}
