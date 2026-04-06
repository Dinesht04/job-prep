## Tell me about Inversion of Control and how it improves the design of code.

inversion of Code, from my understanding, is passing the dependencies and configuration to the function rather than the function instantiating th depencies on it's own.
In traditional practice, the function intantiates it's own values and uses them but in Inversion of Control, we create the object and values and pass them to the function, we just have to make sure that they are an interface of the function param. This helps us:
1. easily swap out values
2. Reuse the function with different values, makes the function a skeleton or a Template of sorts and then we can customise it my passing our own customised values, given they are an interface of the function params