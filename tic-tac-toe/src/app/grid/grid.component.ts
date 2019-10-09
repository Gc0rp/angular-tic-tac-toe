import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {


  grid: string[][] = [["", "", ""], 
                      ["", "", ""], 
                      ["", "", ""]];

  playerPlaying: string = "X";
  playerWon: boolean = false;
  winningPlayer: string = "";

  checkForWin(){

    
    for(let i = 0; i < 3; i++) {
        if(this.grid[0][i] === this.grid[1][i] && this.grid[0][i] === this.grid[2][i] && (this.grid[0][i] !== "") ) {             // Vertical Check
          this.winningPlayer = this.grid[i][0];
          this.playerWon = true;

        } 
        else if (this.grid[i][0] === this.grid[i][1] && this.grid[i][0] === this.grid[i][2] && (this.grid[i][0] !== "")) {        // Horizontal Check
          this.winningPlayer = this.grid[i][0];
          this.playerWon = true;
        }
    }
    // Diagonal Check
    if(this.grid[0][0] === this.grid[1][1] && this.grid[0][0] === this.grid[2][2] && (this.grid[0][0] !== "")) {
      this.winningPlayer = this.grid[0][0];
      this.playerWon = true;
    } else if (this.grid[0][2] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0] && (this.grid[0][2] !== "")){
      this.winningPlayer = this.grid[0][2];
      this.playerWon = true;
    }
  }
  boxClicked(x,y){
      if(this.grid[x][y] === ""){
        this.grid[x][y] = this.playerPlaying;

      if(this.playerPlaying === "X"){
        this.playerPlaying = "O";
      } else{
        this.playerPlaying = "X";
      }

      this.checkForWin();
    }
    
  }
  constructor() { }

  ngOnInit() {
  }

}
