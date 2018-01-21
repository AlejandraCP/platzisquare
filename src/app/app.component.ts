import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lat = -12.0862384;
  lng = -77.0226701;
  lugares:any = [
    {cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardenia'},
    {cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita'},
    {cercania: 2, distancia: 5, active: false, nombre: 'Veterinaria huellitas'},
    {cercania: 3, distancia: 10, active: false, nombre: 'Sushi sushiroll'},
    {cercania: 3, distancia: 35, active: true, nombre: 'Hotel de gracia'},
    {cercania: 3, distancia: 120, active: true, nombre: 'Zapateria el Cavo'}
  ]
}
