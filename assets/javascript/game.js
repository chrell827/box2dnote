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
    
    //grab needed dom elements
    var winText = document.getElementById("win-text");
    var loseText = document.getElementById("lose-text");
    var scoreText = document.getElementById("score");
    var targetText = document.getElementById("target");

    //initializes the game, assigns random values
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
            loseText.textContent = "Losses: " + loseCount;
            clearGame();
        }

        //win condition
        else if(currentPoints === targetPoints)
        {
            winCount++;
            winText.textContent = "Wins: " + winCount;
            clearGame();
        }
       
        //refreshes the score
        refreshStats();
    })

    function refreshStats()
    {
        scoreText.textContent = "Score: " +currentPoints;
    }

    function clearGame()
    {
        targetPoints = Math.floor(Math.random() * 120) + 19;
        targetText.textContent = "Target: " + targetPoints;
        currentPoints = 0;
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
    }

});    