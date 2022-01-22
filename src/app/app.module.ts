import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ROUTES
import { APP_ROUTING } from './app.routes';
// SERVICES
import { HeroesService }  from './services/heroes.service';
// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VillanosComponent } from './components/villanos/villanos.component';
import { PersonajeComponent } from './components/shared/personaje/personaje.component';
import { PersonajeTarjetaComponent } from './components/shared/personaje-tarjeta/personaje-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    BuscadorComponent,
    VillanosComponent,
    PersonajeComponent,
    PersonajeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
