import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
 heroes:Heroe[] = [];
 termino:string = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params["nombre"];
      this.heroes = this._heroeService.buscarHeroes(this.termino);
      console.log('Data here -->', this.heroes);
    });
  }

  verHeroe(index:number){
    this.router.navigate(['/heroe', index]);
  }

}
