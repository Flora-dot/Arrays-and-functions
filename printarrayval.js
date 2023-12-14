// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.
 

const fruits = ['mango', 'apple', 'banana', 'beetroot']
function printArrayValue(){
    for(let i = 0; i < fruits.length; i++){
       console.log(fruits[i]);
    }
}
printArrayValue(fruits);



