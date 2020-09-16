

const lobby = (players) => {
    if (player.match === 'done') {
        player.status === 'spectating'
    }
}

const scores = {


}





const rpsMatch = (playername1, playername2, choice1, choice2) => {
    var score1 = 0
    var score2 = 0
    var player1 = {
        name: playername1,
    }
    var player2 = {
        name: playername2,

    }

    const rps = (player1, player2) => {
        if (player1 !== 'rock' && player1 !== 'paper' && player1 !== 'scissors' || player2 !== 'rock' && player2 !== 'paper' && player2 !== 'scissors') {
            return 'critical error'
        }
        if (player1 === player2) {
            return 'Its a tie'
        }
        return player1 === 'rock' && player2 === 'scissors' || player1 === 'scissors' && player2 === 'paper' || player1 === 'paper' && player2 === 'rock' ?
            'player 1 wins' : 'player 2 wins'

    }
    if (rps(choice1, choice2) === 'critical error') {
        return 'critical error check choice'
    }
    if (rps(choice1, choice2) === 'Its a tie') {
        return choice1 + ' ' + player1.name + ' and ' + player2.name + ' you have dissapointed me with a stalemate ' + choice2
    }

    return rps(choice1, choice2) === 'player 1 wins' ? player1.name + ' wins with ' + choice1 + ' beats ' + choice2 + ' ' + ++score1 : player2.name + ' wins with ' + choice2 + ' beats ' + choice1 + ' ' + ++score2
}

const rpsRan = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
    }
}



const nameRan = () => {
    switch (Math.floor(Math.random() * 7)) {
        case 0:
            return "Crono";
            break;
        case 1:
            return "Marle";
            break;
        case 2:
            return "Lucca";
            break;
        case 3:
            return "Glenn";
            break;
        case 4:
            return "Ayla";
            break;
        case 5:
            return "Robo";
            break;
        case 6:
            return "Magus";
            break;
    }
}

console.log(rpsMatch(nameRan(), nameRan(), rpsRan(), rpsRan()))
