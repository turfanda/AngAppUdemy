import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '../../../node_modules/@angular/core';
import { Subject } from '../../../node_modules/rxjs';

export class ShoppingListService {

    ingChanged = new Subject<Ingredient[]>();
    private Ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIng() {
        return this.Ingredients.slice();
    }

    AddIngredient(ingredient: Ingredient) {
        this.Ingredients.push(ingredient);
        this.ingChanged.next(this.Ingredients.slice());
    }
    AddIngredients(ingredients: Ingredient[]) {
        this.Ingredients.push(...ingredients);
        this.ingChanged.next(this.Ingredients.slice());
    }
    RemoveIngredients() {

    }


}