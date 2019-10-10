$(document).ready(function() {

    //declare variables
    var winCount = 0;
    var loseCount = 0;
    var currentPoints = 0;
    var crystalOne;
    var crystalTwo;
    var crystalThree;
    var crystalFour;
    var targetPoints;

    //initializes the game, assigns random values. function also used to restart the game
    clearGame();

    $(".btn").on("click",function() {

        //crystal clicks
        if($(this).is("#crystal1"))
            currentPoints += crystalOne;
        else if($(this).is("#crystal2"))
            currentPoints += crystalTwo;
        else if($(this).is("#crystal3"))
            currentPoints += crystalThree;
        else if($(this).is("#crystal4"))
            currentPoints += crystalFour;
        
        //lose condition    
        if(currentPoints > targetPoints)
        {
            loseCount++;
            $("#lose-text").text("Losses: " + loseCount);
            clearGame();
        }

        //win condition
        else if(currentPoints === targetPoints)
        {
            winCount++;
            $("#win-text").text("Wins: " + winCount);
            clearGame();
        }
       
        //refreshes the score
        refreshStats();
    })

    function refreshStats()
    {
        $("#score-text").text("Score: " + currentPoints);
    }

    function clearGame()
    {
        targetPoints = Math.floor(Math.random() * 120) + 19;
        $("#target-text").text("Target: " + targetPoints);
        currentPoints = 0;
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
    }

});    