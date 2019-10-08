import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  constructor() { }

  @Input()
  player: string; 

  @Output() turnTaken = new EventEmitter<string>();

  boxClicked(player: string){
    this.turnTaken.emit(player);
  }
  ngOnInit() {
  }

}
