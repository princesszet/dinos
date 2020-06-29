import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DinosaurListComponent } from './dinosaurs/dinosaur-list.component';
import { StarComponent } from './shared/star.component';
import { DinosaurDetailComponent } from './dinosaurs/dinosaur-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosaurListComponent,
    StarComponent,
    DinosaurDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
