import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { environment } from '../../../environments/environment';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStoreService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }
  
  token:string
  
  saveRecipe() {
    this.token = this.authService.getToken();
    console.log(this.token);
    return this.http.put(environment.firebaseUrl + 'recipes.json?auth='+this.token, this.recipeService.getRecipes());
  }
  fetchRecipe() {
    this.token = this.authService.getToken();
    return this.http.get<Recipe[]>(environment.firebaseUrl  + 'recipes.json?auth='+this.token).pipe(
      map((response: Recipe[]) => {
        for (const recipe of response) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return response;
      })
    ).subscribe((response) => {
      this.recipeService.setRecipe(response);
    })
  }
}
