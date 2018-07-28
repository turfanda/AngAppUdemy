import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStoreService } from '../shared/data-store.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
  }
  onSaveData() {
    this.dataStoreService.saveRecipe().subscribe((response: Response) => console.log(response));
  }

  onFetchData(){
    this.dataStoreService.fetchRecipe();
  }

}
