import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipesModule} from'./recipes/recipes.module';

import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { AuthService } from './auth/auth.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthGuardService } from './auth/authGuard.service';
import { DataStoreService } from './shared/data-store.service';
import { RecipeService } from './recipes/recipe.service';
import { RecipeBookComponent } from './recipe-book.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';

@NgModule({
  imports: [
    CommonModule,
    RecipesModule,
    FormsModule,
    RecipeBookRoutingModule,
  ],
  declarations: [RecipeBookComponent,HeaderComponent,ShoppingListComponent,ShoppingEditComponent, RecipeHomeComponent],
  providers: [ShoppingListService, RecipeService,DataStoreService,AuthService,AuthGuardService],
})
export class RecipeBookModule { }
