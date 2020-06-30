import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDinosaur } from './dinosaur';

@Component({
  templateUrl: './dinosaur-detail.component.html',
  styleUrls: ['./dinosaur-detail.component.css']
})

export class DinosaurDetailComponent implements OnInit {
  pageTitle: string = "Dinosaur Detail";
  dinosaur: IDinosaur;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle += `: ${id}`;
    this.dinosaur = {
      "id": 1,
      "species": "Tyrannosaurus rex",
      "height": "3.7 - 6.1 m",
      "weight": "4,5 - 14 tons",
      "foodSource": "carnivorous",
      "starRating": 4.5,
      "imageUrl": "assets/images/trex.jpeg"
    }
  }

  onBack(): void {
    this.router.navigate(["/dinosaurs"]);
  }

}
