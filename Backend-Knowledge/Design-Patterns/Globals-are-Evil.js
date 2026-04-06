var hiMessageWithoutName = "hi my name is" 

function GreetMessage(name){
    //the variable is altered to server temp purpose 
    hiMessageWithoutName += name
    console.log(himessage)
}

function ParagraphPrint(name,paragraph){
    //somewhere else in the code, where they dont know that
    //the value has beem changed
    console.log(hiMessageWithoutName,name,paragraph)
}


