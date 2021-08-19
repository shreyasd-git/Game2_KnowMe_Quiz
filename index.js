/* Repl link
https://replit.com/@ShreyasDevarkar/KnowMeGame2?embed=1&output=1
*/

var readlineSync = require("readline-sync")

var name = readlineSync.question("May I have your name? ");
console.log("-------------------------\n");
console.log("Welcome to 'How Well Do You Know Shreyas?' " +name);
console.log("-------------------------\n");

var score = 0

function knowmegame(question, answer)
{
  var useranswer = readlineSync.question(question);
  if(useranswer === answer)
  {
    console.log("You are Correct! ");
    score += 1;
    console.log("You Score is: " +score);
  }
  else
  {
    console.log("You are Wrong! ");
    score -= 1;
    console.log("Your score is: " +score);
  }

  console.log("------------------------------\n");

}

var questions = 
[
  {
    question : "What is my Favourite food?\n",
    answer : "Mutton",
  },

  {
    question : "What Sport do i Play?\n",
    answer : "Cricket",
  },

  {
    question : "What is my Zodiac Sign?\n",
    answer : "Capricorn",
  },

  {
    question : "Where is my Native Village?\n",
    answer : "Kolhapur",
  },

  {
    question : "What is my favourite vacation destination?\nOptions are - Manali, Kolhapur, Gulmarg \n",
    answer : "Kolhapur",
  }
];

for (i=0; i<questions.length; i++)
{
  var currentquestion = questions[i];
  knowmegame(currentquestion.question, currentquestion.answer);
}

console.log("\n** Your Final Score is: " +score+ " on 5 **");
console.log("Thankyou for Playing! ");