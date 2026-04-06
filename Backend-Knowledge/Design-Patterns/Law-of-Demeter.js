// VIOLATION
function canAfford(person, price) {
    // We are talking to person (friend)
    // BUT then we reach into wallet (stranger) 
    // AND then we reach into money (stranger's stranger)
    return person.wallet.money.amount >= price; 
}

// if the amount is renamed then it breaks it, instead it should be

function canAfford(person, price) {
    // We are talking to person (friend)
    // BUT then we reach into wallet (stranger) 
    // AND then we reach into money (stranger's stranger)
    return person.hasFunds(price); 
}



//Inside the Person class
hasFunds(amount){
    return this.wallet.getAmount() >= amount
}