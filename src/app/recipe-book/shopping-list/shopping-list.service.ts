import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

    ingChanged = new Subject<Ingredient[]>();
    editShopListITem = new Subject<number>();
    private Ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIng() {
        return this.Ingredients.slice();
    }

    getIngWithIndex(i: number) {
        return this.Ingredients[i];
    }

    updateIngWithIndex(i: number, a: Ingredient) {
        this.Ingredients[i].name = a.name;
        this.Ingredients[i].amount = a.amount;
    }

    deleteIngWithIndex(i: number) {
        this.Ingredients.splice(i, 1);
        this.ingChanged.next(this.Ingredients.slice());
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
