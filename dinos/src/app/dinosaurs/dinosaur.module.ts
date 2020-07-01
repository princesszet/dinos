import { NgModule } from '@angular/core';
import { DinosaurListComponent } from './dinosaur-list.component';
import { DinosaurDetailComponent } from './dinosaur-detail.component';
import { DinosaurDetailGuard } from './dinosaur-detail.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DinosaurListComponent,
    DinosaurDetailComponent
  ],
  imports: [

    RouterModule.forChild([
      { path: "dinosaurs", component: DinosaurListComponent },
      {
        path: "dinosaurs/:id",
        canActivate: [DinosaurDetailGuard],
        component: DinosaurDetailComponent
      },
    ]),
    SharedModule
  ]
})

export class DinosaurModule { }
