import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() xrecipe: Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onSelectRecipe() {
    this.recipeService.selectedRecipe.emit(this.xrecipe);
  }

}
