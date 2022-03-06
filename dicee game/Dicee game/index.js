var randomnumber1=Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage="dice" +randomnumber1 + ".png"; //dice2.png-dice6.png

var randomImagesource="images/" + randomDiceImage; //images/dice2.png-images/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);

var randomnumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice" +randomnumber2 + ".png"; 

var randomImagesource="images/" + randomDiceImage;

image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImagesource);


if(randomnumber1>randomnumber2){
    document.querySelector("h3").innerHTML ="player1 wons ✨😎😎✨";
}
else if (randomnumber1<randomnumber2){
    document.querySelector("h3").innerHTML ="player2 wons ✨😎😎✨ ";
}
else{
    document.querySelector("h3").innerHTML ="draw ";
}