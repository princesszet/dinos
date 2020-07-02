import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDinosaur } from './dinosaur';
import { DinosaurService } from './dinosaur.service'

@Component({
  templateUrl: './dinosaur-detail.component.html',
  styleUrls: ['./dinosaur-detail.component.css']
})

export class DinosaurDetailComponent implements OnInit {
  pageTitle: string = "Dinosaur Detail";
  errorMessage = "";
  dinosaur: IDinosaur | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dinosaurService: DinosaurService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get("id");
    if (param) {
      const id = +param;
      this.getDinosaur(id);

    }
  }

  getDinosaur(id: number) {
    this.dinosaurService.getDinosaur(id).subscribe({
      next: dinosaur => this.dinosaur = dinosaur,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(["/dinosaurs"]);
  }

}
