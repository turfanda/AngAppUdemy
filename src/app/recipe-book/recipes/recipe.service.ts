import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      2,
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  setRecipe(newRecipes: Recipe[]) {
    this.recipes = newRecipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipeById(id: number): Recipe {
    return this.recipes.find((a: Recipe) => a.id === id);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipeById(id: number, recipe: Recipe) {
    this.recipes.map(a => {
      if (a.id === id) {
        a.name = recipe.name;
        a.description = recipe.description;
        a.imagePath = recipe.imagePath;
        a.ingredients = recipe.ingredients;
      } return a;
    });
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(id: number) {
    const index = this.recipes.findIndex(a => a.id === id);
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
