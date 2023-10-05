const buttons = document.querySelectorAll('button');
        const resultText = document.querySelector('.result-container');
        const choices = ['rock', 'paper', 'scissors'];

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const userChoice = button.id;
                const computerChoice = choices[Math.floor(Math.random() * 3)];

                const result = getWinner(userChoice, computerChoice);
                resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
            });
        });

        function getWinner(player, computer) {
            if (player === computer) {
                return "It's a tie!";
            } else if (
                (player === 'rock' && computer === 'scissors') ||
                (player === 'paper' && computer === 'rock') ||
                (player === 'scissors' && computer === 'paper')
            ) {
                return 'You win!';
            } else {
                return 'Computer wins!';
            }
        }