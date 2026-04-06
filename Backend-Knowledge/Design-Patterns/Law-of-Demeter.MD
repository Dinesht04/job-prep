## The Law of Demeter (the Principle of Least Knowledge) states that each unit should have only limited knowledge about other units and it should only talk to its immediate friends (sometimes stated as "don't talk to strangers").
Would you write code violating this principle, show why it is a bad design and then fix it?

Sounds like this is an advice to avoid scoping related bugs. First example that comes to mind is a bug where some function alters a global variable. and the way to fix it is to pass the global variable as an arguement to the function, and let the function modify that local variable that was passed instead of the global. 

But when I look into the question more, "talk to it's immideate friends, not stangers". I don't get it. It can refer to scope, as well as semantic/logical scope. Like one part of business logic using variables and functions of some other part of a business logic - due to confusion about semantic naming errors, or plain misunderstanding.

## After understanding AI's answer

Okay so it was more related to methods and classes.
It means that a function or a method should'nt have access to the things/values that it does not require.
instead should have a function to return the value, so that the an external function doesn't break when a property "name" has changed

```
// VIOLATION
function canAfford(person, price) {
    // We are talking to person (friend)
    // BUT then we reach into wallet (stranger) 
    // AND then we reach into money (stranger's stranger)
    return person.wallet.money.amount >= price; 
}// if the amount is renamed then it breaks it, instead it //should be

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

```