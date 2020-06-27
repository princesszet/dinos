import { Injectable } from '@angular/core';
import { IDinosaur } from './dinosaur';

@Injectable({
    // you can access this service from any component or service 
    // in the application
    providedIn: "root"
})
export class DinosaurService {

    getDinosaurs(): IDinosaur[] {
        return [
            {
                "id": 1,
                "species": "Tyrannosaurus rex",
                "height": "3.7 - 6.1 m",
                "weight": "4,5 - 14 tons",
                "foodSource": "carnivorous",
                "starRating": 4.5,
                "imageUrl": "assets/images/trex.jpeg"
            },
            {
                "id": 2,
                "species": "Brachiosaurus",
                "height": "26 - 30 m",
                "weight": "28,3 - 58 tons",
                "foodSource": "herbivorous",
                "starRating": 4.3,
                "imageUrl": "assets/images/brachiosaurus.jpg"
            },
            {
                "id": 3,
                "species": "Velociraptor",
                "height": "1.5 - 2 m",
                "weight": "12 - 19,7 kg",
                "foodSource": "carnivorous",
                "starRating": 3.9,
                "imageUrl": "assets/images/velociraptor.jpg"
            },
            {
                "id": 2,
                "species": "Maiasaura",
                "height": "2.5 m",
                "weight": "3 - 10 tons",
                "foodSource": "herbivorous",
                "starRating": 4.9,
                "imageUrl": "assets/images/maiasaura.jpg"
            },
            {
                "id": 2,
                "species": "Diplodocus",
                "height": "up to 52 m",
                "weight": "11 - 15 tons",
                "foodSource": "herbivorous",
                "starRating": 4,
                "imageUrl": "assets/images/diplodocus.png"
            },
        ]
    }

}