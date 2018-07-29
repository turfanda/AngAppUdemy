import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStoreService } from '../shared/data-store.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStoreService: DataStoreService, public authService:AuthService) { }

  ngOnInit() {
  }
  onSaveData() {
    this.dataStoreService.saveRecipe().subscribe((response: Response) => console.log(response));
  }

  onFetchData(){
    this.dataStoreService.fetchRecipe();
  }
  onLogout(){
    this.authService.logout();
  }
}
