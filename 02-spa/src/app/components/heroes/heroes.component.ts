import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heores:Heroe[] = [];
  constructor( private _heroesServie: HeroesService) { }

  ngOnInit(): void {
    this.heores = this._heroesServie.getHeores();
  }

  

}