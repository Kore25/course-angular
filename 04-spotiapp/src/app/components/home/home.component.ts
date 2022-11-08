import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  msjError: string;

  constructor( private spotify: SpotifyService) {
    this.loading = true;
    this.msjError = "";
    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (svError) => {
        this.error = true;
        this.loading = false;
        this.msjError = svError.error.error.message;
      });
  }

  ngOnInit(): void {
  }

}
