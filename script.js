//Declaring the Random Number Generators
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

// Random image text for 1st Dice
var randomDiceImage = "dice-six-faces-"+ randomNumber1 +".png";

var randomImageSource1 = "images/" + randomDiceImage;

// Random image text for 2nd Dice
var randomDiceImage = "dice-six-faces-"+ randomNumber2 +".png";

var randomImageSource2 = "images/" + randomDiceImage;

//Giving the Value for 1st
var img1 = document.getElementById("p1_die")

img1.setAttribute("src", randomImageSource1);


//Giving the Value for 2nd
var img2 = document.getElementById("p2-die");

img2.setAttribute("src", randomImageSource2);



//To Print the Winners
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins!"
    
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else
{
    document.querySelector("h1").innerHTML = "Draw!"
}



   


