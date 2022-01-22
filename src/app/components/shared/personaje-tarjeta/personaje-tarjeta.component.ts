import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personaje-tarjeta',
  templateUrl: './personaje-tarjeta.component.html',
  styleUrls: ['./personaje-tarjeta.component.css']
})
export class PersonajeTarjetaComponent implements OnInit {
  @Input() personaje: any = {};
  @Input() index: number = 0;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public verPersonaje = () => {
    const isHeroe = this._router.url.includes('heroes') || this._router.url.includes('buscarHeroe');
    let urlToNavigate = isHeroe ? '/personajeHeroe' : '/personajeVillano'
    this._router.navigate([urlToNavigate, this.index]);
  }

}
