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

    //variables for the solution
    var solution = "";
    var solved = false;

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
        targetPoints = Math.floor(Math.random() * 131) + 20;
        $("#target-text").text("Target: " + targetPoints);
        currentPoints = 0;
        crystalOne = Math.floor(Math.random() * 12) + 8;
        $("#caption1").text(crystalOne);
        crystalTwo = Math.floor(Math.random() * 12) + 8;
        $("#caption2").text(crystalTwo);
        crystalThree = Math.floor(Math.random() * 12) + 8;
        $("#caption3").text(crystalThree);
        crystalFour = Math.floor(Math.random() * 12) + 8;
        $("#caption4").text(crystalFour);
        solution = "";
        solved = false;
        $(".figure-caption").css({visibility: "hidden"});
        $("#solve-text").empty();
    }
    
    //button to show crystal value
    $("#hint").on("click",function(){
        $(".figure-caption").css({visibility: "visible"});
    })

    //button to for the solving algorithm
    $("#solver").on("click",function(){
        solve("",0);
        if(solution === "")
            solution = "No solution";
        $("#solve-text").text(solution);
    })
    
    //algorith that shows the shortest solution
    function solve(currSol, tally)
    {   
        if(tally === targetPoints)
        {
            if(solution === "")
                solution = currSol;
            else if(currSol.length < solution.length)
                solution = currSol;
        }
        
        if((tally + crystalOne) <= targetPoints)
            solve(currSol + "1, ", tally + crystalOne);
        if((tally + crystalTwo) <= targetPoints)
            solve(currSol + "2, ", tally + crystalTwo);
        if((tally + crystalThree) <= targetPoints)
            solve(currSol + "3, ", tally + crystalThree);
        if((tally + crystalFour) <= targetPoints)
            solve(currSol + "4, ", tally + crystalFour);
    }

});    