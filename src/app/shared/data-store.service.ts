import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { environment } from '../../environments/environment';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';


@Injectable()
export class DataStoreService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }
  saveRecipe() {
    return this.http.put(environment.firebaseUrl+'recipes.json',this.recipeService.getRecipes());
  }
  fetchRecipe(){
    return this.http.get<Recipe[]>(environment.firebaseUrl+'recipes.json').pipe(
      map((response:Recipe[])=>{
        for(const recipe of response){
          if(!recipe['ingredients']){
            recipe['ingredients']=[];
          }
        }
        return response;
      })
    ).subscribe((response)=>{
      this.recipeService.setRecipe(response);
    })
  }
}
