const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return 'Rock';
    } else if (randomChoice === 1) {
        return 'Paper';
    } else {
        return 'Scissor';
    }
};

console.log(getComputerChoice());

const getPlayerChoice () => {
    const playerChoice = 
};