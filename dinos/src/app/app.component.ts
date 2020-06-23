import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <div><h1>{{ pageTitle }}</h1>
      <app-dinos></app-dinos>
    </div>
  `
  
})

export class AppComponent {
  pageTitle: string = 'Dinos';
}
