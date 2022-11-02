import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { 
    this.http.get('https://restcountries.com/v3.1/lang/spa')
      .subscribe( paises => {
        console.log(paises);
        
      })
  }

  ngOnInit(): void {
  }

}
