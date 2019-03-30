export default class Game {
  constructor() {
    this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.currentPlayer = 1;
    this.xChar = "&#x1D5EB;";
    this.oChar = "&#x1D5E2;";
  }
  boardState = () => { return this.board }
  reset = () => { this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0] }
  currentPlayerChar = () => { return this.currentPlayer === 1 ? this.xChar : this.oChar; }

  charFor = (pos) => {
    if(this.board[pos] === 1) return this.xChar;
    if(this.board[pos] === -1) return this.oChar;

    return '';
  }

  play = (pos) => {
    if(this.board[pos] === 0) {
      this.board[pos] = this.currentPlayer;
      this.togglePlayer();
    }
  }
  
  togglePlayer = () => {
    if(this.currentPlayer === 1) {
      this.currentPlayer = -1
    } else {
      this.currentPlayer = 1
    }
  }

  // board positions:
  // 0 1 2
  // 3 4 5
  // 6 7 8
  xWin = () => {
    const b = this.board;

    if(b[0] + b[1] + b[2] === 3) return true;
    if(b[3] + b[4] + b[5] === 3) return true;
    if(b[6] + b[7] + b[8] === 3) return true;
    if(b[0] + b[4] + b[8] === 3) return true;
    if(b[6] + b[4] + b[2] === 3) return true; 

    return false;
  }

  oWin = () => {
    const b = this.board;

    if (b[0] + b[1] + b[2] === -3) return true;
    if (b[3] + b[4] + b[5] === -3) return true;
    if (b[6] + b[7] + b[8] === -3) return true;
    if (b[0] + b[4] + b[8] === -3) return true;
    if (b[6] + b[4] + b[2] === -3) return true;

    return false;
  }

  tie = () => { return this.board.every(val => val !== 0) }
}
