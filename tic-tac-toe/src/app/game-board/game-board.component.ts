import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  constructor() { }

  validInput: boolean = false;

  displayGrid(bestOf: string){
    console.log(bestOf);
    if(bestOf.match(/[0-9]/g)) {
      this.validInput = true;
    } else {
      this.validInput = false;
    }
    console.log(this.validInput);
  }

  ngOnInit() {
  }

}
