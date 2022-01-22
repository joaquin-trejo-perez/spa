import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VillanosService } from 'src/app/services/villanos.service';
import { Personaje } from 'src/app/interfaces/personaje';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  public termino: string = '';
  public personajes: Personaje[] = [];
  public fromHeroes: boolean = false;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _villanosService: VillanosService,
    private _router: Router
  ) {
    this.fromHeroes = this._router.url.includes('buscarHeroe');
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.personajes = this.fromHeroes
        ? this._heroesService.buscarHeroe(this.termino)
        : this._villanosService.buscarVillano(this.termino);
      console.log(this.personajes);
    });
  }

}
