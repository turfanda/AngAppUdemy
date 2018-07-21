import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {

  constructor(private counterService:CounterService) { }

  activeUsers = [
    'Max', 'Anna'
  ];
  inActiveUsers = [
    'Bob', 'Jhon'
  ]
  setToActive(name:string){
    var index = this.inActiveUsers.indexOf(name);
    if (index > -1) {
      this.inActiveUsers.splice(index, 1);
    }
    this.activeUsers.push(name);
    this.counterService.increaseITA(1);
  }
  setToInctive(name:string){
    var index = this.activeUsers.indexOf(name);
    if (index > -1) {
      this.activeUsers.splice(index, 1);
    }
    this.inActiveUsers.push(name);
    this.counterService.increaseATI(1);
  }
}
