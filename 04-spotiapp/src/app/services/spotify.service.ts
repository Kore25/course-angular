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

   getQuery( query: string ){
      const url = `https://api.spotify.com/v1/${query}`;
      const headers = new HttpHeaders({
        Authorization: 'Bearer BQDdpexa-rS4R4qBkBKTeVNxkK6vaimWps5nxpQ3-Gg20GH9hDsFzZqMd57Fpwpb5VuMaP8RftXCli15n1D3o_ACrwpZqQ4cH4oM3_2g2zlybKudp5Q',
      });

      return this.http.get(url, { headers });
   }

   getNewReleases() {
      return this.getQuery('browse/new-releases')
          .pipe( map( (data: any) => data.albums.items ));
   }

   getArtistas( termino: string ){
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
          .pipe( map( (data: any) => data.artists.items ));
   }

   getArtista( id: string ){
    return this.getQuery(`artists/${id}`);        
   }

   getTopTracks( id: string ){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
        .pipe( map( (data: any) => data.tracks ));
   }
}
