import { Component, OnInit } from '@angular/core';
import { IDinosaur } from './dinosaur';

@Component({
  templateUrl: './dinosaur-detail.component.html',
  styleUrls: ['./dinosaur-detail.component.css']
})
export class DinosaurDetailComponent implements OnInit {
  pageTitle: string = "Dinosaur Detail";
  dinosaur: IDinosaur;

  constructor() { }

  ngOnInit() {
  }

}
