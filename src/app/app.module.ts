import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyButtonComponent } from './mybutton/mybutton.component';
import { WeekFormComponent } from './weekform/weekform.component';
import { CellFormComponent } from './cellform/cellform.component';
import { LabelFormComponent } from './labelform/labelform.component';


@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    WeekFormComponent,
    CellFormComponent,
    LabelFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
