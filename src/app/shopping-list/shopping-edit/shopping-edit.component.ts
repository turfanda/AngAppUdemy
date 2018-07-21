import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingName') ingName: ElementRef;
  @ViewChild('ingAmount') ingAmount: ElementRef;

  constructor(private shopSerivce:ShoppingListService) { }

  ngOnInit() {
  }

  onAddIng() {
    const asd  =  new Ingredient(this.ingName.nativeElement.value,this.ingAmount.nativeElement.value)
    this.shopSerivce.AddIngredient(asd);
  }
  onDeleteIng() {

  }
  onClearIng() {

  }
}
