import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';import { AppComponent } from './app/app.component';

import {UsersService} from './users.service'
import { CounterService } from './counter.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppComponent, InactiveUsersComponent, ActiveUsersComponent],
  providers: [UsersService,CounterService],
  bootstrap: [AppComponent],
  exports:[AppComponent,InactiveUsersComponent,ActiveUsersComponent]
})
export class Practice5Module { }
