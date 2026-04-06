## Active-Record is the design pattern that promotes objects to include functions such as Insert, Update, and Delete, and properties that correspond to the columns in some underlying database table. In your opinion and experience, which are the limits and pitfalls of the this pattern?

Can't think of any. In my expeirence it is a very nice atomic approach to clean and efficiecnt modular code writing. More complex database calls would certainly call for more difficulty in debgging and unecesary complications.

## After Searching what is Active Record

So turns out I got it wrong lol, Active record is the design pattern where the object data and the db altering functions related to the object's row in the table are coupled.

This is inefficient as it promotes 
1. RE-typing the same code for each object
2. Storing of data in non-uniform ways, as custom functions are now accessible - which would lead to harder time debugging and un-uniformity in code.

I think the data layer and business layer should be separated as it leads to better undestanding of the code, unformity in code strucute and inputs/outputs and less complexity.