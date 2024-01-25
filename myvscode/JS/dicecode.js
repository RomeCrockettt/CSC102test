// Single line comment
/* Multi line comment */


// This function will let us play a dice game
function playDiceGame(){
    // We are going to narrate what the function does through the console
    console.log("The playDiceGame function has been called")

    // Roll two separate die, but by using the same function
    var die1 = rollDie();
    console.log("The first die roll is: " + die1);
    var die2 = rollDie();
    console.log("The second die roll is: " + die2);

    // Add the die rolls together
    var dieSum = die1 + die2;
    console.log("The sum of the dice rolls is: " + dieSum);

    // Output the dice rolls to the html page
    
    document.getElementById("die1Result").innerHTML = "Die 1 is: " + die1;
    document.getElementById("die2Result").innerHTML = "Die 2 is: " + die2;
    document.getElementById("sumResult").innerHTML = "The sum of the dice is: " + dieSum;

    /* Rules for the dice game:
        To win, you must roll the same number on each die, and they must be even.
        If the sum is 7 or 11, you lose.*/

    // Check to see if Rule is met.
    // || is the OR operator in JavaScript
    // Use == to check if a value is true
    if (dieSum == 7 || dieSum == 11){
        document.getElementById("diceGameResult").innerHTML = "You lost the dice game.";
    }

    // Lets check if we win by rolling 2 even numbers that match
    // First we check if the dice are the same numbers
    // Then we check to see if they are even, by dividing a number by 2, and seeing if the remainder is 0
    // The modulus operator % performs a division operator, but only returns the remainder.
    else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("diceGameResult").innerHTML = "You won the dice game!";
    }

    // If neither of the previous if statements are fulfilled, this remaining else statement will run.
    else { document.getElementById("diceGameResult").innerHTML = "You tied the round."; }
}

// Create a function that generates a die roll, a random number between 1 and 6
function rollDie(){
    // Math.random generates a random number between 0 and 1
    var die = Math.random() * 6;

    // Returns the die variable, after rounding it up to the nearest whole number.
    return Math.ceil(die);
}