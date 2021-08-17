const marsCost = 5000;
const moonCost = 3000;

// Increment Quantity
let incrementQuantity = function (event) {
    let quantity = document.getElementById(event)
    let quantityValue = quantity.value
    quantityValue++
    quantity.value = quantityValue
    calculateJourney(quantityValue, event)
}

// Decrement Quantity
let decrementQuantity = function (event) {
    let quantity = document.getElementById(event)
    let quantityValue = quantity.value
    if (quantityValue > 0) {
        quantityValue--
        quantity.value = quantityValue
        calculateJourney(quantityValue, event)
    }

}

let calculateJourney = function (quantityValue, event) {
    let marsCostText = document.getElementById('mars-cost')
    let moonCostText = document.getElementById('moon-cost')

    if (event == 'mars') {
        // update Mars Cost
        totalMarsCost = quantityValue * marsCost
        marsCostText.innerText = totalMarsCost

    } else {
        // update Moon Cost
        totalMoonCost = quantityValue * moonCost
        moonCostText.innerText = totalMoonCost
    }

    // update total cost
    document.getElementById('total-cost').innerText = parseFloat(marsCostText.innerText) + parseFloat(moonCostText.innerText)



}