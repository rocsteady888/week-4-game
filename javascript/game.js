$( document ).ready(function() {
    console.log( "ready!" );

var crystalCollector = new Object();
crystalCollector.goalNumber = 0;
crystalCollector.wins = 0;
crystalCollector.loses = 0;
crystalCollector.crystals = ["yellow", "blue", "red", "green"];

$("#start").on("click", function() {
        
        for (let i = 0; i < 9; i++) {
            crystalCollector.goalNumber = Math.floor(Math.random() * 120);
            console.log(crystalCollector.goalNumber);
        }

        // Once we have our final lotto number, we'll prepend it to the top of our random-number div.
        $("#random-number").prepend("<br><hr>" + lottoNumber);
// press start button to begin
// crystal collector
// start random number
// 4 crystals
// each represents hidden number
// each click on a crystal adds point to total score
// each click is added to guesses value at the bottom 
// try to match the random number
// when guessed sum equals random number the game ends and player gets a win
// if player guesses sum over random number the game ends and player loses.
// new game has a new random number and the four crystals have 4 new random values


});