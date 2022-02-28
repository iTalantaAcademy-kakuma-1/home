# Implicit Coercion
- In this case, the coercion is done implicitly. When JavaScript operates in a wrong data type, it will try to convert the value to the right data type.
Sometimes, the result is different from the one expected. Below are some examples of implicit typecasting:

`12 + ""    //Output is "12" as number 12 is converted to string "12"
"15" * 2    //Output is 30 as string 15 is converted to number 15
"15" - "11" //Output is 4 as both the strings are converted to number
undefined + 6 //Output is NaN as undefined could not be converted to number
"Hello" + null  //Output is "Hellonull" as null is converted to string "null"
null + 25     //Output is 25 as null is converted to 0.
true + true //Output is 2 as true is converted to number 1.
false + 10 //Output is 10 as false is converted to number 0.
10 * [6] //Output is 60 as [6] is converted to number 6.
10 * [10, 20] //Output is NaN as [10, 20] could not be converted to number
[1] + [1,2] //Output is "11,2" as [1] is converted to "1" and [1,2] is converted "1,2". Finally the two are concatenated to give the result "11,2"`

Whenever we pass a different data type as an operand in a numeric expression involving operators like -, *, /, %, the conversion process is similar to calling the in-built Number function on the operand. If the conversion to number isn’t possible, NaN is returned.

- The + operator works differently than the other numerical operators. It can work as both concatenation and numerical operator depending on the type of operand passed.



# Explicit Coercion
In this case, type conversion is explicitly done in the code by the developer. JavaScript provides inbuilt methods for type conversion.

## Converting to Number
The Number() global method is used to convert any other data type value to numeric values. 

`Number("25") //Output is 25 as "25" string is converted to number 25
Number("") //Output is 0 as "" string is converted to 0
Number([]) //Output is 0 as [] is converted to 0
Number(null) //Output is 0 as null is converted to 0
Number(true) //Output is 1 as true is converted to 1
Number(false) //Output is 0 as false is converted to 0
Number("Test") //Output is NaN as "Test" could not be converted to number
`

## Converting to String
The String() global method is used to convert any other data type value to string values.

`String(25) //Output is "25" as 25 is converted to string "25"
String([]) //Output is "" as [] is converted to empty string ""
String(null) //Output is "null" as null is converted to string "null"
String(true) //Output is "true" as true is converted to string "true"
String(false) //Output is "false" as false is converted to string "false"
String({}) //Output is "[object Object]" as {} is converted to string(similar to calling toString() on a object)`

## Converting to Boolean
The Boolean() global method is used to convert any other data type value to Boolean values.

`Boolean(25) //Output is true
Boolean([]) //Output is true
Boolean(null) //Output is false
Boolean({}) //Output is true
Boolean("Yeah! I will be converted to Boolean.") //Output is true`