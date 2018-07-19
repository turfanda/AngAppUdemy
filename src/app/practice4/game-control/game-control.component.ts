import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styles: []
})
export class GameControlComponent implements OnInit {


  myTimer;
  number;
  clearArray = false;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.clearArray = false;
    this.myTimer = setInterval(() => { this.number = Math.floor(Math.random() * 100) + 1; }, 1000);
  }
  onGameEnd() {
    clearInterval(this.myTimer);
    this.clearArray = true;
  }

}
