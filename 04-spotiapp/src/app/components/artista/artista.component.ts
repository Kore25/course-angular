import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  tracks: any = [];
  loading: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) { 
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string){
    this.loading = true;
    this.spotify.getArtista(id)
        .subscribe( artista => {
          console.log(artista);          
          this.artista = artista;
          this.loading = false;
        });
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id)
      .subscribe( tracks => {
        this.tracks = tracks.map( (item: any) => ({ ...item, urlSpoti: `https://open.spotify.com/embed/track/${item.id}?utm_source=generator` }));
        console.log(this.tracks);
      });
  }

}