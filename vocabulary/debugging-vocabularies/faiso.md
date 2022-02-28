# Hoisting

In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 

Example:
  sum();

function sum(a,b){
  console.log(a+b);
}  

Example2:

function print(){
name="faiso";
let name;
console.log(name)
}

print();

faska