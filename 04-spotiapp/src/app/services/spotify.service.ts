import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {  map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Services spotify on.');
    
   }

   getNewReleases() {
      const headers = new HttpHeaders({
        Authorization: 'Bearer BQCjF9bR6-D-k2BJR9VqxNBFc1Cj9pODbqZyefei5Jc25BAoKeQ2gODSaH_9SxE1ypVdN3lFDzD59144GhrSWoh6cXewbv021kmgk9NDcwC8Stljz68',
      });
      return this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
          .pipe( map( (data: any) => {
            return data.albums.items;
          }));
   }

   getArtista( termino: string ){
      const headers = new HttpHeaders({
        Authorization: 'Bearer BQCjF9bR6-D-k2BJR9VqxNBFc1Cj9pODbqZyefei5Jc25BAoKeQ2gODSaH_9SxE1ypVdN3lFDzD59144GhrSWoh6cXewbv021kmgk9NDcwC8Stljz68',
      });
      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{ headers })
          .pipe( map( (data: any) => {
            return data.artists.items;
          }));
   }
}
