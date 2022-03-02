# How To Document a function in javascript and code review.
 ## Document function

There's a standard approach to JS documentation known as JSDoc. It follows a standard format. /** * [someFunction description] * @param {[type]} arg1 [description] * @param {[type]} arg2 [description] * @return {[type]} [description] */ var someFunction = function (arg1, arg2) { // Do something... };
10:37
### how to write a document function 

1. Include A README file that contains
   
* A brief description of the project

* Installation instructions
  
* A short example/tutorial

2. Allow issue tracker for others

3. Write an API documentation

* What a function do

* What the function's parameters or arguments are

* What a function returns

5. An example for code documentation.
Document your code

6. Apply coding conventions, such as file organization, comments, naming conventions, programming practices, etc.

7. Include information for contributors
 
8. Include citation information
 
9. Include licensing information
 
10. Link to your e-mail address at the end
    
11. List all the version of the files   along with the major edits you did in each version
    
## Code review 

Code reviews are usually done asynchronously and in writing through a code review tool.

 This is usually out of convenience, to enable remote code reviews, and to allow multiple people to review the same code change.

 * Steps To review code
  
1. Establish goals. Code reviews are more than just finding errors and bugs. 
2. Do your first pass. Try to get to the initial pass as soon as possible after you receive the request.

3. Use a ticketing system. 

4. Run tests.

5. Test proposed changes.
   
6. Do your in-depth pass.

7. Submit the evaluation.









