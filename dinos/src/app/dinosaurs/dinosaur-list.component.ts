import { Component } from '@angular/core';

@Component({
    selector: 'app-dinos',
    templateUrl: './dinosaur-list.component.html'

})

export class DinosaurListComponent {
    dinoTitle: string = "Dinosaur List";
    imageWidth: number = 280;
    imageMargin: number = 2;
    dinosaurs: any[] = [
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

}