import { ActivatedRoute, Router } from '@angular/router';
import { VillanosService } from 'src/app/services/villanos.service';
import { HeroesService } from 'src/app/services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  personaje: any;
  isHeroe: boolean;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _villanosService: VillanosService,
    private _router: Router,
  ) {
    this.isHeroe = this._router.url.includes('personajeHeroe');
    this._activeRoute.params.subscribe(params => {
      const paramId = params['id'];
      this.personaje = this.isHeroe ? this._heroesService.getHeroe(paramId) : this._villanosService.getVillano(paramId);
    });
  }

  ngOnInit(): void {
  }

}
