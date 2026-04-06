## Why are global and static objects evil?

## My answer

1. Static and Global variables' scopes are throughout the program, so any function or line of code can change it's state, thus making it difficult to debug. 
In my opinion, there is a place for Static and Global variables: when they are constants. For Eg: An error message string, An environment variable.
Going back to the question, the reason why they are evil, is because they are a shortcut basically, skipping out on scoping the variable, which frees us from thinking hard about the logic of passing that variable and defining it's scope. And then this shortcut has it's caviats, like difficulty in tracking state and error debugging.

Code Example
```

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
} // will output wrong value


```