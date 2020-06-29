import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DinosaurListComponent } from './dinosaurs/dinosaur-list.component';
import { StarComponent } from './shared/star.component';
import { DinosaurDetailComponent } from './dinosaurs/dinosaur-detail.component';
import { WelcomeComponent } from './home/welcome.component'

@NgModule({
  declarations: [
    AppComponent,
    DinosaurListComponent,
    StarComponent,
    DinosaurDetailComponent,
    WelcomeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "dinosaurs", component: DinosaurListComponent},
      { path: "dinosaurs/:id", component: DinosaurDetailComponent},
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
