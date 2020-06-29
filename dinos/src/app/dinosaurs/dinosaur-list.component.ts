import { Component, OnInit } from '@angular/core';
import { IDinosaur } from './dinosaur';
import { DinosaurService } from './dinosaur.service';

@Component({
    selector: 'app-dinos',
    templateUrl: './dinosaur-list.component.html',
    styleUrls: ['./dinosaur-list.component.css']

})

export class DinosaurListComponent implements OnInit {
    dinoTitle: string = "Dinosaur List";
    imageWidth: number = 280;
    imageMargin: number = 2;
    showImage: boolean = true;
    _listFilter: string;
    filtered: IDinosaur[];
    errorMessage: string;
    
    dinosaurs: IDinosaur[] = [];

    constructor(private dinosaurService: DinosaurService) {
    }

    ngOnInit(): void {
        // here retrieve the data from the dinosaur service
        this.dinosaurService.getDinosaurs().subscribe({
            next: dinosaurs => {
                this.dinosaurs = dinosaurs;
                this.filtered = this.dinosaurs;
            },
            error: err => this.errorMessage = err
        });

    }

    onNotify(message: string): void {}

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filtered = this.listFilter ? this.performFilter(this.listFilter) : this.dinosaurs;
    }

    performFilter(filterBy: string): IDinosaur[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.dinosaurs.filter((dinosaur: IDinosaur) =>
            dinosaur.species.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

}