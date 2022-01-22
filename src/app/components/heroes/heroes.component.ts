import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Personaje[] = [];

  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

}
