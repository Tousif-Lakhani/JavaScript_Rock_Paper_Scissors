// const score = {
            //     wins: 0,
            //     losses: 0,
            //     ties: 0
            // };

            let score = JSON.parse(localStorage.getItem('score')); //this one loads the score from the local storage
            // console.log(JSON.parse(localStorage.getItem('score')));

            if (score === null) {
                score = {
                    wins: 0,
                    losses: 0,
                    ties: 0
                };
            };
            
            updateScoreElement();

            let isAutoPlaying = false;
            let intervalId;

            function autoPlay() { 
                if (!isAutoPlaying) {
                intervalId = setInterval(function() { 
                    const playerMove = pickComputerMove();
                    playGame(playerMove);
                }, 1000); 
                isAutoPlaying = true;
            } else { 
                clearInterval(intervalId);
                isAutoPlaying = false;} 
            }
            
            document.querySelector('.js-rock-button')
                .addEventListener('click', () => { 
                playGame('Rock');
            });

            document.querySelector('.js-paper-button')
                .addEventListener('click', () => { 
                playGame('paper');
            });

            document.querySelector('.js-scissors-button')
                .addEventListener('click', () => { 
                playGame('Scissors');
            });

            //helps to track down the keys pressed
            document.body.addEventListener('keydown', (event) => {
                // console.log(event.key);
                if (event.key === 'r') {
                    playGame('Rock');
                } else if (event.key === 'p') { 
                    playGame('paper');
                } else if (event.key ==='s') { 
                    playGame('Scissors');
                }
            });

            function playGame(playerMove){
                const computerMove = pickComputerMove();

                let result = '';

                if (playerMove === 'Scissors'){
                    if (computerMove === 'rock')
                        {result = 'You Lose.';}
                    else if (computerMove === 'paper')
                        {result = 'You Win.'}
                    else if (computerMove ==='Scissors')
                        {result = 'Tie.';}
                
                } else if (playerMove === 'paper'){

                    if (computerMove === 'rock')
                        {result = 'You Win.';}
                    else if (computerMove === 'paper')
                        {result = 'Tie.'}
                    else if (computerMove ==='Scissors')
                        {result = 'You Lose.';}

                } else if (playerMove === 'Rock'){

                    if (computerMove === 'rock')
                        {result = 'Tie.';}
                    else if (computerMove === 'paper')
                        {result = 'You Lose.'}
                    else if (computerMove ==='Scissors')
                        {result = 'You Win.';}
                }
                
                if (result === 'You Win.') {
                    score.wins += 1;
                } else if (result === 'You Lose.') {
                    score.losses += 1;
                } else if (result === 'Tie.'){
                    score.ties += 1;
                }

                localStorage.setItem('score', JSON.stringify(score)); // used to set the score in JSOn and convert it to a string
               
                updateScoreElement();
                
                // updateResultElement();
                document.querySelector('.js-result')
                    .innerHTML = result;

                //updateMoveElement();
                document.querySelector('.js-moves')
                    .innerHTML = 
                    `You
                    <img src="images/${playerMove}-emoji.png" class ="move-icon">
                    <img src="images/${computerMove}-emoji.png" class="move-icon">
                    Computer`;
                
//                 alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`); 
            }

            function updateResultElement() {
                document.querySelector('.js-result')
                    .innerHTML = result;
            }

            function updateMovesElement() {
                document.querySelector('.js-moves')
                    .innerHTML = ` You ${playerMove} - ${computerMove} Computer`;
            }

            function updateScoreElement() {
                document.querySelector('.js-score')
                    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }

            function pickComputerMove(){
                const randomNumber = Math.random();

                let computerMove = '';

                if (randomNumber >= 0 && randomNumber < 1/3) 
                    {computerMove = 'rock';}
                else if (randomNumber >= 1/3 && randomNumber < 2/3)
                    {computerMove = 'paper';}
                else if (randomNumber >= 2/3 && randomNumber < 1)
                    {computerMove ='Scissors';}
                
                return computerMove;
            }