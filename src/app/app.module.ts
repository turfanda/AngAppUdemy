import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { TDFormComponent } from './practice6/tdform/tdform.component';
import { ReactiveFromComponent } from './practice7/reactive-from/reactive-from.component';
import { RecipeService } from './recipes/recipe.service';




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
    EvenComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    TDFormComponent,
    ReactiveFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Practice5Module,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
