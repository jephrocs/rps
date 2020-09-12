

const lobby = (players) => {
    if (player.match === 'done') {
        player.status === 'spectating'
    }
}

const rps = (player1, player2) => {
    if (player1 === player2) {
        return 'Its a tie'
    }
    return player1 === 'rock' && player2 === 'scissors' || player1 === 'scissors' && player2 === 'paper' || player1 === 'paper' && player2 === 'rock' ?
        'player 1 wins' : 'player 2 wins'
}
console.log(rps('scissors', 'rock'))