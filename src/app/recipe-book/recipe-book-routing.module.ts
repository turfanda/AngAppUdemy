import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: 'recipebook', component: RecipeBookComponent, children: [
      {path: '', component: RecipeHomeComponent },
      {path: 'shopping-list', component: ShoppingListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeBookRoutingModule { }
