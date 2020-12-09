# CLI-quiz
![image](https://user-images.githubusercontent.com/42477290/101593866-b24cc800-3a16-11eb-834b-5e4d30f1c8d5.png)

what is ***require()***??

require is a function that allows us to work with modules defined in separate files.If u are familiar with C then require is similar to ***include***

***
***readline-sync***
Basically it allows to have interaction with the user via the console in a synchronous manner.

To get the user input one can use 'question'

`var readInput=require('readline-sync');`

`var input =readInput.question('Helooooo what's ur name?');//the user's response is stored in the variable 'input'`
***
## What is chalk??
It basically a styling library for your terminal.You can also chain multiple styles!!

`var chalk=require('chalk')`

`console.log(chalk.red.italic("we are trying out chalk"))`
![image](https://user-images.githubusercontent.com/42477290/101345947-d214ac80-38ad-11eb-9079-094dcd8fd1c8.png)

read more about it here.... [Chalk js Documentation](https://www.npmjs.com/package/chalk)
***
`forEach()`

A method that allows a function to be executed on every element of the list just as any regular for loop does.
######  A basic syntax.
`array.forEach(function(currentValue, index, arr))`

>1. currentValue= the current element being worked on
>2. index = index of the current element
>3. arr=array object the current object belongs to

>example
>>`list=[1,2,3,4]`

>>`list.forEach((element,index)=>{console.log(index,element)});`

>>![image](https://user-images.githubusercontent.com/42477290/101589413-5d0cb880-3a0e-11eb-8ecd-dd371fd5e9a3.png)
***

****
The complete code can be found **[here](https://repl.it/@Androng/CLI-quiz#index.js)**

