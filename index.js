var readInput=require('readline-sync')
const col=require('chalk')
var name=readInput.question(col.yellow("Hurrah!!! You are shortlisted for the interview process,passing which you shall join our "+col.italic.bold.blue( "Falcon-Heavy ") +"crew's next mission to the ISS\nSo let's start with your name?" ))
console.log(col.cyan.italic("hey "+col.bold.bgRed.green(name)+" get ready to jet off in our spaceship?"))
var score=0;
var correct=col.green("U're right its ");
var incorrect=col.red("Oops ,Sorry answer is ");
var score_mg=col.blue("\nYour score is ");

var questions=[
  {
  "ques":  "The day on which the Sun’s direct rays cross the celestial equator is called:\n",
  "ans":"Equinox"
  },
  {
    "ques":"What term describes the alignment of three celestial bodies?\n",
    "ans":"syzygy"
  },
   {
    "ques":"What is the visible part of the Sun called?\n",
    "ans":"photosphere"
  },
   {
    "ques":"When did the Space Age begin?\n1.1941   2.1969\n3.1999   4.1957\n",
    "ans":"4"
  },
   {
    "ques":"Who was the first person to enter outer space twice?\n 1.Yuri Gagarin  2.Christina Koch  3.Vladimir Komarov 4.Scott Kelly\n",
    "ans":"3"
  },

];



 questions.forEach((objs,count)=>{



var user=readInput.question(count+1+"  "+col.greenBright(objs.ques));
 if(user.toLocaleLowerCase()===(objs.ans.toLocaleLowerCase()))
 {
   score++;
   console.log(correct+objs.ans+score_mg+score);
 }
 else
 {
   console.log(incorrect+objs.ans+score_mg+score)
 }


 }
 );

 if(score>3)
 console.log(col.bold.italic.green("Welcome to our spaceship!!!!"));
 else
 console.log(col.bold.blue("Trust us you tried your best!! but unfortunately you didn't qualify the round.Better luck next time"))
