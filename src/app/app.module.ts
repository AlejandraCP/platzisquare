import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBzjvPvtZmEJ05RgJ2ktI7l-pn4VRgmgDo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
