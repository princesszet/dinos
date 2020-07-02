import { Injectable } from '@angular/core';
import { IDinosaur } from './dinosaur';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    // you can access this service from any component or service 
    // in the application
    providedIn: "root"
})

export class DinosaurService {
    private dinosaurUrl = 'api/dinosaurs/dinosaurs.json';

    constructor(private http: HttpClient) {}

    getDinosaurs(): Observable<IDinosaur[]> {
        return this.http.get<IDinosaur[]>(this.dinosaurUrl).pipe(
            tap(data => console.log("All:" + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getDinosaur(id: number): Observable<IDinosaur | undefined> {
        return this.getDinosaurs().pipe(
            map((dinosaurs: IDinosaur[]) => dinosaurs.find(d => d.id === id))
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = "";

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, 
                            error message is: ${err.message}`;
        }
        
        console.error(errorMessage);
        return throwError(errorMessage);

    }

}