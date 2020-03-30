import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_RUTAS} from './app-routing.module';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { UniversoComponent } from './components/universo/universo.component';
import { IndiceComponent } from './components/indice/indice.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CampeonTarjetaComponent } from './components/campeon-tarjeta/campeon-tarjeta.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {CampeonesService} from './servicios/campeones.service';
import { CampeonComponent } from './components/campeon/campeon.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UniversoComponent,
    IndiceComponent,
    BuscadorComponent,
    CampeonTarjetaComponent,
    NavbarComponent,
    CampeonComponent
  ],
  imports: [
    BrowserModule,
    APP_RUTAS,
    
  ],
  providers: [CampeonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
