import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }
  users = this.userService.inActiveUsers;
  onSetToActive(name: string) {
    this.userService.setToActive(name);
  }
}
