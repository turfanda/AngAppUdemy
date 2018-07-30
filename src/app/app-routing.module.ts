import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./core/home/home.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";

const appRoute: Routes = [
    {path:'',component:HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}