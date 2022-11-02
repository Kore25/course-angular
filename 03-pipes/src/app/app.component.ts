import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan Ámerica';
  nombre2: string = 'LUiS CaRLOs De LA ToRRE FloReS';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 12345.5;
  fecha: Date = new Date();
  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/vWn21ya5Hmo';
  activar: boolean = true;

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data.');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }
}
