let playerName = null;
let question = null;
let answer = "";

const startGame = () => {
    playerName = prompt("What is your name?");

    if (typeof playerName === "string") {
        askQuestion();
    } else if (playerName === null) {
        return;
    } else {
        alert("Please enter a real name...");
    }
}

const askQuestion = () => {
    question = prompt(`Hello ${playerName}, what is your question?`);

    if (typeof question === "string") {
        generateAnswer();
        alert("The answer to your question is\n" + answer);
        restartGame();
    } else if (question === null) {
        return;
    } else {
        alert("Please ask a valid question.");
    }
}

const generateAnswer = () => {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);

    switch (randomNumber) {
        case 1:
            answer = "It is certain.";
            break;
        case 2:
            answer = "It is decidedly so.";
            break;
        case 3:
            answer = "Without a doubt.";
            break;
        case 4:
            answer = "Yes definitely.";
            break;
        case 5:
            answer = "You may rely on it.";
            break;
        case 6:
            answer = "As I see it, yes.";
            break;
        case 7:
            answer = "Most likely.";
            break;
        case 8:
            answer = "Outlook good.";
            break;
        case 9:
            answer = "Yes.";
            break;
        case 10:
            answer = "Signs point to yes.";
            break;
        case 11:
            answer = "Reply hazy, try again.";
            break;
        case 12:
            answer = "Ask again later.";
            break;
        case 13:
            answer = "Better not tell you now.";
            break;
        case 14:
            answer = "Cannot predict now.";
            break;
        case 15:
            answer = "Concentrate and ask again.";
            break;
        case 16:
            answer = "Don't count on it.";
            break;
        case 17:
            answer = "My reply is no.";
            break;
        case 18:
            answer = "My sources say no.";
            break;
        case 19:
            answer = "Outlook not so good.";
            break;
        case 20:
            answer = "Very doubtful.";
            break;
        default:
            answer = "I Am Error";
    }
}

const restartGame = () => {
    restart = prompt("Do you want to ask again?\n" + "yes or no").toLowerCase();
    if (restart === "yes") {
        startGame();
    } else if (restart === "no") {
        alert("Thank you for playing my game.");
        return;
    } else {
        alert("Please say 'yes' or 'no'");
        restartGame();
    }
}