import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../../model/people';

@Injectable()
export class ImageService {

    private apiKey = 'AIzaSyCkw8Qj3l8RhMxDosBMG-ZfvYiDdzQIzok';
    private cx = '006010250862553810748:a0x2xtkxmyu';

    constructor(private _http: HttpClient) { }

    /**
     * @todo montar um objeto para forma a queryString com o parametros do google
     * @param people
     */
    initImage( people: People) {
        const url = `https://www.googleapis.com/customsearch/v1?key=${this.apiKey}&cx=${this.cx}&searchType=image&num=10&imgSize=large&imgType=face&q=${people.name}`;

        this._http.get(url).subscribe(response => {
            const result = response['items'].filter(function (object) {
                const link = object['link'];

                let extension = link.substring(link.length, link.length - 4);
                extension = extension.replace('.', '');

                const imagesExtensions = ['png', 'jpg', 'jpeg'];

                return imagesExtensions.indexOf(extension) === 1;
            }).shift();

            people.image = result['link'] || '';
        });

        return people;
    }
}
