import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;
  subscription: Subscription;
  editItem: Ingredient;
  editItemIndex: number;
  editMode = false;
  constructor(private shopSerivce: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shopSerivce.editShopListITem.subscribe((a: number) => {
      this.editItem = this.shopSerivce.getIngWithIndex(a);
      this.editMode = true;
      this.editItemIndex = a;
      this.form.setValue({
        'name': this.editItem.name,
        'amount': this.editItem.amount
      });
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddIng(f: NgForm) {
    const asd = new Ingredient(f.value.name, f.value.amount);
    if (this.editMode) {
      this.shopSerivce.updateIngWithIndex(this.editItemIndex, asd);
    } else {
      this.shopSerivce.AddIngredient(asd);
    }
    this.editMode = false;
    this.form.reset();
  }

  onDeleteIng() {
    this.shopSerivce.deleteIngWithIndex(this.editItemIndex);
    this.editMode = false;
    this.form.reset();
  }
  onClearIng() {
    this.form.reset();
    this.editMode = false;
  }
}
