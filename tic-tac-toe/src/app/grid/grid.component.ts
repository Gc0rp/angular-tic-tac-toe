import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {


  grid: string[][] = [["", "", ""], ["", "", ""], ["", "", ""]];

  playerPlaying: string = "X"

  checkForWin(){
    
  }
  boxClicked(x,y){
    this.grid[x][y] = this.playerPlaying;

    if(this.playerPlaying === "X"){
      this.playerPlaying = "O";
    } else{
      this.playerPlaying = "X";
    }

    this.checkForWin();
  }
  constructor() { }

  ngOnInit() {
  }

}
