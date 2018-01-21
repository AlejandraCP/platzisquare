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
    {active: true, nombre: 'Floreria la Gardenia'},
    {active: true, nombre: 'Donas la pasadita'},
    {active: false, nombre: 'Veterinaria huellitas'},
    {active: false, nombre: 'Sushi sushiroll'},
    {active: true, nombre: 'Hotel de gracia'},
    {active: true, nombre: 'Zapateria el Cavo'}
  ]
}
