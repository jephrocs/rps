

const lobby = (players) => {
    if (player.match === 'done') {
        player.status === 'spectating'
    }
}






const rpsMatch = (playername1, playername2, choice1, choice2) => {
    var player1 = {
        name: playername1,
        choice: choice1,
    }
    var player2 = {
        name: playername2,
        choice: choice2,

    }
    console.log(player2.choice, player2.name)
    const rps = (player1, player2) => {
        if (player1 === player2) {
            return 'Its a tie'
        }
        return player1 === 'rock' && player2 === 'scissors' || player1 === 'scissors' && player2 === 'paper' || player1 === 'paper' && player2 === 'rock' ?
            'player 1 wins' : 'player 2 wins'
    }
    if (rps(choice1, choice2) === 'Its a tie') {
        return player1.name + ' and ' + player2.name + ' you have dissapointed me with a stalemate'
    }
    return rps(choice1, choice2) === 'player 1 wins' ? player1.name + ' wins' : player2.name + ' wins'
}
console.log(rpsMatch('john', 'crono', 'scissors', 'paper'))