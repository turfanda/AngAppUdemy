import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [FooterComponent, HomeComponent],
  exports: [HomeComponent, FooterComponent]
})
export class CoreModule { }
