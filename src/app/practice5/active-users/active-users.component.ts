import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }
  users = this.userService.activeUsers;
  onSetToInactive(name: string) {
    this.userService.setToInctive(name);
  }
}
