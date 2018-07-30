import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { WarningAlertComponent } from './practice1/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './practice1/success-alert/success-alert.component';
import { Practice2Component } from './practice2/practice2.component';
import { Practice3Component } from './practice3/practice3.component';
import { GameControlComponent } from './practice4/game-control/game-control.component';
import { OddComponent } from './practice4/odd/odd.component';
import { EvenComponent } from './practice4/even/even.component';
import { Practice5Module } from './practice5/practice5.module';
import { FilterPipe } from './practice8/pipe/filter.pipe';
import { SortPipe } from './practice8/pipe/sort.pipe';
import { ReversePipe } from './practice8/pipe/reverse.pipe';
import { ShortenPipe } from './practice8/pipe/shorten.pipe';
import { AppRoutingModule } from './app-routing.module';
import { TDFormComponent } from './practice6/tdform/tdform.component';
import { ReactiveFromComponent } from './practice7/reactive-from/reactive-from.component';
import { PipeComponent } from './practice8/pipe/pipe.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RecipeBookModule } from './recipe-book/recipe-book.module';




@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Practice2Component,
    Practice3Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    TDFormComponent,
    ReactiveFromComponent,
    PipeComponent,
    FilterPipe,
    ShortenPipe,
    ReversePipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    RecipeBookModule,
    FormsModule,
    Practice5Module,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
