import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinosaurListComponent } from './dinosaur-list.component';
import { DinosaurDetailComponent } from './dinosaur-detail.component';
import { DinosaurDetailGuard } from './dinosaur-detail.guard';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DinosaurListComponent,
    DinosaurDetailComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "dinosaurs", component: DinosaurListComponent },
      {
        path: "dinosaurs/:id",
        canActivate: [DinosaurDetailGuard],
        component: DinosaurDetailComponent
      },
    ])
  ]
})

export class DinosaurModule { }
