import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HomeComponent } from "./components/home/home.component";
import { PersonajeComponent } from "./components/shared/personaje/personaje.component";
import { VillanosComponent } from "./components/villanos/villanos.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'villanos', component: VillanosComponent },
    { path: 'about', component: AboutComponent },
    { path: 'personajeHeroe/:id', component: PersonajeComponent},
    { path: 'personajeVillano/:id', component: PersonajeComponent},
    { path: 'buscarHeroe/:termino', component: BuscadorComponent },
    { path: 'buscarVillano/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });