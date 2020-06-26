import { Component, OnInit } from '@angular/core';
import { IDinosaur } from './dinosaur';

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
    
    dinosaurs: IDinosaur[] = [
        {
            "id": 1,
            "species": "Tyrannosaurus rex",
            "height": "3.7 - 6.1 m",
            "weight": "4,500 - 14,000 kg",
            "foodSource": "carnivorous",
            "starRating": 4.5,
            "imageUrl": "assets/images/trex.jpeg"
        },
        {
            "id": 2,
            "species": "Brachiosaurus",
            "height": "26 - 30 m",
            "weight": "28.3 - 58 tons",
            "foodSource": "herbivorous",
            "starRating": 4.3,
            "imageUrl": "assets/images/brachiosaurus.jpg"
        },
    ];

    constructor() {
        this.filtered = this.dinosaurs;
        this.listFilter = "";
    }

    ngOnInit(): void {
        console.log("On Init!");
    }

    onNotify(message: string): void {

    }

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