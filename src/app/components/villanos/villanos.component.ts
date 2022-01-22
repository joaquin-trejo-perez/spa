import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje';
import { VillanosService } from 'src/app/services/villanos.service';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

  villanos: Personaje[] = [];

  constructor(private _villanosService: VillanosService) { }

  ngOnInit(): void {
    this.villanos = this._villanosService.getVillanos();
  }

}
