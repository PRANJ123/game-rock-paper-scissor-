let yourScore = 0;
let compScore = 0;
let arr = ["Rock", "Paper", "Scissors"];
let playGame = (userChoice) => {
    let cInd = Math.floor(Math.random() * 3);
    if (userChoice === arr[cInd]) {
        document.getElementById("mCont").innerHTML = "It was a draw";
        document.getElementById("mCont").style.backgroundColor = "Black";
    }
    else {
        if (userChoice === "Rock") {
            if (arr[cInd] === "Paper") {
            
                document.getElementById("mCont").innerHTML = "You Lost!,Computer choose Paper";
                compScore++;
                document.getElementById("mCont").style.backgroundColor = "Red";
                document.getElementById("comp").innerHTML = compScore;
                
            }
            else{
                document.getElementById("mCont").innerHTML = "You Win!,Computer choose Scissors";
                yourScore++;
                document.getElementById("mCont").style.backgroundColor = "Green";
                document.getElementById("your").innerHTML = yourScore;
            }
            
        }
        if (userChoice === "Paper") {
            if (arr[cInd] === "Rock") {
            
                document.getElementById("mCont").innerHTML = "You Win!,Computer choose Rock";
                yourScore++;
                document.getElementById("mCont").style.backgroundColor = "Green";
                document.getElementById("your").innerHTML = yourScore;
                
            }
            else{
                document.getElementById("mCont").innerHTML = "You Lost!,Computer choose Scissors";
                compScore++;
                document.getElementById("mCont").style.backgroundColor = "Red";
                document.getElementById("comp").innerHTML = compScore;
            }
            
        }
        if (userChoice === "Scissors") {
            if (arr[cInd] === "Rock") {
            
                document.getElementById("mCont").innerHTML = "You Lost!,Computer choose Rock";
                compScore++;
                document.getElementById("mCont").style.backgroundColor = "Red";
                document.getElementById("comp").innerHTML = compScore;
                
            }
            else{
                document.getElementById("mCont").innerHTML = "You Win!,Computer choose Paper";
                yourScore++;
                document.getElementById("mCont").style.backgroundColor = "Green";
                document.getElementById("your").innerHTML = yourScore;
            }
            
        }
    }

}





const choice = document.querySelectorAll('.choice');

choice.forEach(choice => {
    choice.addEventListener('click', (event) => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

       

    });
});