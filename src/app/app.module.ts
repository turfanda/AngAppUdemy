import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningAlertComponent } from './practice1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './practice1/success-alert/success-alert.component';
import { Practice2Component } from './practice2/practice2.component';
import { Practice3Component } from './practice3/practice3.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { GameControlComponent } from './practice4/game-control/game-control.component';
import { OddComponent } from './practice4/odd/odd.component';
import { EvenComponent } from './practice4/even/even.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { Practice5Module } from './practice5/practice5.module';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Practice2Component,
    Practice3Component,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GameControlComponent,
    OddComponent,
    DropdownDirective,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Practice5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
