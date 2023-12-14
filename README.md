# Arrays-and-functions

Javascript Array methods

- Array length

 The length property is used to get the number of elements in an array. The .length property is always higher than the indexof an array by 1.
 This property can also be used to add a value to an array

 - Array push
The push() method is used to add a new value to an existing element. This add the value as the last element of the array.

- Array toString
This methods is used to convert an array to a string.

- Array pop
The pop() method is used to remove the last element of an array.

- Array shift
The shift() method which is a bit similar to the pop method is used to remove the first element from and array and after doing that it shifts other elements to a lower index. This means that the element with an index of 1 becomes 0 and so on. It also returns the shifted value (removed).

- Array concantenation (concat)
The concat() method is used to merge existing arrays together.
it can equally be used to merge a value into an existing an array.

- Array splice

The splice method is used to new items to an array, unlike push it can add more than 1 ietem to an array at once.
To do this you need Two parameters one which indicates the index where the items should be added to and the second which indicates how many items to remove. This method can also be used to remove values from an array.

- Array slice
The slice() method is used to cut out from an array and create a new array with the result. To do this you are required to specify where the operation is to be carried out on using the index, then it will cut out from there to the last value and create a new array with these values. 

--JavaScript Functions 
A function is a block of code designed to perform a specific task and a function is only executed when it is called (Invoked).
Functions are first class objects in Javasripct and this means that they can be passed to other functions, assigned to variables and properties.
A function in JavaScript is defined using the function keyword, a named= and parentheses.


eg ;
 function name()

 The parameters for a function are added in the parentheses and the arguments are the values the function receives when called.

 There are 3 ways to invoke a function
 - When an event occurs 
 This happens on the user interface of the webpage/website and this is when a user takes an action which could be clicking a button
 - when it is invoked 
 This is when it is called in a javascript code outside the function block
 - Automatically 

 A JavaScript function will stop running as soon as it reaches a return statement and this contains a value to be returned.

 There are four kinds of cunctions in JavaScript
 - Regular function: This type of fynction can return anything and it always runs to completion after it has been invoked.
 - Generator Function - It returns a 'Generator' object and its execution can be puased and continued using a 'yield' operator'
 (Yield operators are used to puase and resume a generator function)
 - Asnyc Function: This function returns a 'promise' and it is paused and resumed using the 'await' operator'.
 Async generator Function: This returns an "AsyncGenerator' object and it can be paused and resumed using both the yield and await operator.

 There are 3 ways to define a function
 - Declaration
 - Expression
 - Construtor

 Function Namming
 Since functions are actions its a good practice to name a function with a verbal prefix that describes the action the function is performing. A function name is written in Pascal case.

 A function should be restricted to performing only one action.

 Control Flow Statements

 These are statements that allow you ro control the order in which statements are executed and this depends or certain conditions.

There are 3 main types of control flow statements
 - If/else statements
 - switch statements
 - loops

 If/else statements are used to execute a code if it meets the required conditions and if not it runs the provided alternative.

 Switch statements are used to perform different actions based on different conditions.
 And it provides a default block of code to be executed if the value doesn't match the provided values.

 Loops
 They are used to execute  block of code multiple times provided a condition is met.

 Two main types of loops in Javascript
 For loops and While loops