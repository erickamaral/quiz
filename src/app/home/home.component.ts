import { ApiService } from '../shared/services/api.service';
import { People } from '../model/people';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../model/movie';
import { StorageService } from '../shared/services/storage.service';
import { ImageService } from '../shared/services/image-service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private peoples: Array<People> = [];
    public wait = false;

    constructor(
        private _router: Router,
        private _apiService: ApiService,
        private _storageService: StorageService,
        private _imageService: ImageService
    ) { }



    ngOnInit() {
        this._storageService.resertPoints();

        /**
         * Usar o mock quando a api nao responder bem, a API de image do google tem 100 requests diarias free
         */
        // this._storageService.initStorageMock();
        this._initStorage();
    }

    natigateTo(router: string) {
        this._router.navigate([router]);
    }

    private _initPeoples(url?: string) {
        this._apiService.getPeoples(url).subscribe(response => {
            const peoples = response['results'];

            for (const key in peoples) {
                const data = peoples[key];

                const people = new People();
                people.deserialize(data);

                if (data['films'].length) {
                    this._addMoviesPeople(data['films'], people);
                }

                if (data['species'].length) {
                    this._addEspeciePeople(data['species'].pop(), people);
                }

                if (data['homeworld']) {
                    this._addPlanetPeople(data['homeworld'], people);
                }

                if (data['vehicles'].length) {
                    this._addVehiclesPeople(data['vehicles'], people);
                }

                this._imageService.initImage(people);
                this.peoples.push(people);
            }

            if (response['next']) {
                this._initPeoples(response['next']);
            } else {
                this.wait = false;
                this._storageService.savePeoples(this.peoples);
            }

        });
    }

    private _initStorage() {
        if (!this._storageService.peopleDbInitialized()) {
            this.wait = true;

            this._initPeoples();
        }
    }

    private _addMoviesPeople(urls: Array<string>, people: People) {
      urls.map(url -> {
        this._apiService.getRequest(url).subscribe(response => {
            const movie = new Movie();
            movie.deserialize(response);
            people.addMovie(movie);
        });
      });
    }

    private _addVehiclesPeople(urls: Array<string>, people: People) {
        for (const key in urls) {
            this._apiService.getRequest(urls[key]).subscribe(response => {
                people.addVehicles(response['name']);
            });
        }
    }


    private _addEspeciePeople(url: string, people: People) {
        this._apiService.getRequest(url).subscribe(response => {
            people.specie = response['name'];
        });
    }


    private _addPlanetPeople(url: string, people: People) {
        this._apiService.getRequest(url).subscribe(response => {
            people.planet = response['name'];
        });
    }

}
