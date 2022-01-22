import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public buscar = (termino: string) => {
    let urlToNavigate = this._router.url.includes('heroes') ? '/buscarHeroe' : '/buscarVillano'
    this._router.navigate([urlToNavigate, termino]);
  }

}
