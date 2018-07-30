import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  ingSubscription: Subscription;

  constructor(private shopService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shopService.getIng();
    this.ingSubscription = this.shopService.ingChanged.subscribe((a: Ingredient[]) => this.ingredients = a);
  }
  ngOnDestroy() {
    this.ingSubscription.unsubscribe();
  }

  editItem(i: number) {
    this.shopService.editShopListITem.next(i);
  }

}
