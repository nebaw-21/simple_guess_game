const uniqueNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let score =20;
let highScore=0;


const inputNumberElement = document.getElementById('guess');
const checkElementButton = document.getElementById('check');
const displayGussedNumber =document.getElementById('number');
const displayWinOrLossCondition =document.getElementById('message');
const displayScoreElement = document.getElementById('score');
const  displayHighScoreElement = document.getElementById('highscore');
const resetButtonElement = document.getElementById('again');


checkElementButton.addEventListener('click' , insertedNumber);
resetButtonElement.addEventListener('click', resetTheGame);


function resetTheGame()
{
    score =20;
    document.querySelector('body').classList.remove('backgroundColor');
    displayScoreElement.textContent = score;
    displayGussedNumber.textContent = '?';
    displayWinOrLossCondition.innerHTML = ' <p class="message"  id="message">Start guessing...</p>';

    
    
}

function insertedNumber(){
    const inputNumber = inputNumberElement.value;

    if(inputNumber <uniqueNumber)
    {
        displayWinOrLossCondition.textContent =("too low");
    }else if(inputNumber > uniqueNumber ){
      
        displayWinOrLossCondition.textContent =("too high");
    }
    else{
        displayGussedNumber.textContent = uniqueNumber;
        displayWinOrLossCondition.textContent = ("you win!");
        document.querySelector('body').classList.add('backgroundColor');

                
if(score>highScore)
{
    highScore=score;
    displayHighScoreElement.textContent =highScore;

}
         
    }


    if(inputNumber == uniqueNumber)
    {
      
        return;
    }

    else {
       score--;

        displayScoreElement.textContent = score;


    }

    
   
 }

