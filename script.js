const buttons = document.querySelectorAll('button');
const resultText = document.querySelector('.result-container');
const userButton = document.getElementById('user-button');
const userRuleDropdown = document.getElementById('user-rule');
const resetButton = document.getElementById('reset-button');
const choices = ['rock', 'paper', 'scissors'];
let userRules = {};

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        console.log(computerChoice);
        const result = getWinner(userChoice, computerChoice);
        resultText.textContent = `You chose Kutas Matejki, computer chose ${computerChoice}. ${result}`;
    });
});

// Function to set user-defined rules
userRuleDropdown.addEventListener('change', () => {
    const selectedRule = userRuleDropdown.value;
    userRules['user-button'] = selectedRule;
});

// Function to reset the game
resetButton.addEventListener('click', () => {
    userRules = {};
    resultText.textContent = '';
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
    } else if (userRules[player] === computer) {
        return 'User Button wins!';
    } else {
        return 'Computer wins!';
    }
}
