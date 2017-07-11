/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores=[0,0];
var roundScore=0;
var activePlayer=0;

//document.querySelector('#score-0').textContent=dice;
/*
$(function () {
    var changeScore0=$("#current-0");
    changeScore0.html(dice);
});
*/

function rollDice(path) {
     $(".cube").attr("src", path)
    getScore()
}

 var diceArray= [
     "picture/dice-1.svg",
     "picture/dice-2.svg",
     "picture/dice-3.svg",
     "picture/dice-4.svg",
     "picture/dice-5.svg",
     "picture/dice-6.svg"
 ];

function getNumber() {
    i=Math.floor(Math.random() * 6);
    return diceArray[i];
}

$(".btn-roll").click (function () {
    rollDice(getNumber());
    $(".cube").fadeIn();
});

$("#score-0").text('0');
$("#score-1").text('0');
$("#current-0").text('0');
$("#current-1").text('0')


var d=0


function getScore() {
    if (diceArray[0]) {
        d = d + 1;
        $("#current-0").text(d);
    }
    else if (diceArray[1]) {
        d = d + 2;
        $("#current-0").text(d);
    }
    else if (diceArray[2]){
        d = d + 3;
        $("#current-0").text(d);
    }
    else if (diceArray[3]){
        d = d + 4;
        $("#current-0").text(d);
    }
    else if (diceArray[4]){
        d = d + 5;
        $("#current-0").text(d);
    }
    else {
        d = d + 6;
        $("#current-0").text(d);
    }

};
