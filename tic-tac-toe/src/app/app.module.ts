import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { BoxComponent } from './box/box.component';
import {RouterModule, Routes} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GameBoardComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'grid', component: GridComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
