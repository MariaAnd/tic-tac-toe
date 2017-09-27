class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.field = [[null,null,null] ,[null,null,null] , [null,null,null]];
        this.step = 1;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex]=== null){
            this.field[rowIndex][columnIndex] = this.currentPlayer;
            this.step ++;
            if (this.step%2 === 0){
                this.currentPlayer = 'o';
            } else {
                this.currentPlayer = 'x';
            }
        }
    }

    isFinished() {
        return this.isDraw() || (this.getWinner()!== null);
    }

    getWinner() {
        var winner = null;
        for (var i=0; i<3; i++) {
            if ((this.field[i][0] === this.field[i][1]) && (this.field[i][1] === this.field[i][2])){
                winner = this.field[i][0];
            }
        }
        for (var j=0; j<3; j++) {
            if ((this.field[0][j] === this.field[1][j]) && (this.field[1][j]=== this.field[2][j])) {
                winner = this.field[0][j];
            }
        }
        if (((this.field[0][0] === this.field[1][1]) && (this.field[1][1]=== this.field[2][2]))
            || ((this.field[0][2] === this.field[1][1]) && (this.field[1][1]=== this.field[2][0]))){
            winner = this.field[1][1];
        }
        return winner;
    }

    noMoreTurns() {
        return (this.step === 10);
    }

    isDraw() {
        return (this.noMoreTurns() && (this.getWinner()===null));
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
