# Vocabulary form Javascript
___
1. Keyword/ Reserved word
 ___
Keywords are reserved words that are part of the syntax in the programming language.

 For example,
var a = 8;


Here, var is a keyword that denotes that a is a variable.


Some examples are for, function, this, typeof, void, true, etc.

JavaScript Identifiers
An identifier is a name that is given to entities like variables, functions, class, object etc.


var a = 8;


Here, we are using 'a' as an identifier to name the variable.

Keywords cannot be used to name identifiers. 

In JavaScript, identifiers are case-sensitive and can contain Unicode letters, $, _, and digits (0-9), but may not start with a digit.

2. Variable
   ___

A named reference to a value is a variable. You can think of variables as simply “storage containers” for data in your code. We can use variables to store goodies, visitors, and other data. Until recently there was only one way to create a variable in JavaScript — the var statement. 

But in the newest JavaScript versions ( ES6 ) we have two more ways

 — let and const.

Difference between var, let, and const
var, let and const 

For more detaile explanation please read this article

3. Operator
   ___
Operators are reserved words that perform the action on values and variables. Operators are used to perform specific mathematical and logical computations on operands.

For example, in 7 + "5", the + sign is an operator and 7 (number) is left side operand and "8" (string) is right-side operand. The + operator performs the addition of two values/expressions and returns a result.

In JavaScript, operators are used to compare values, perform arithmetic operations, etc. There are various operators supported by JavaScript:

Arithmetic Operators
Comparison Operators
Logical Operators
Assignment Operators
Ternary Operators
typeof Operator
String operators
Comma operator
Relational operators
Unary operators
Follow MDN for complete details about each Operator.

4. Expression
___
A reference, value, or a group of reference(s) and values(s) combined with operator(s), which result in a single value. In simple words, expression is a combination of values, variables, operators which computes a value.

Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects (for example those that assign value to a variable) and those that in some sense evaluate and therefore resolve to a value.

The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to seven.

The code 3 + 4 is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable.

5. Statement

___
A group of words, numbers, and operators that do a task is a statement. JavaScript statements are the commands to tell the browser what action to perform. Statements are separated by a semicolon (;).
var a = 7 + "5";
is a JavaScript statement.

### Conclusion
This article discussed briefly some important JS vocabularies, I hope you find this article helpful. I'll be posting more articles like this on my account, so please stay connected. If you have any questions, feel free to reach out!

Thank you for reading!
Happy Coding