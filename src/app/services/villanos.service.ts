import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  private villanos: Personaje[] = [
    {
      nombre: "Flash Reverso",
      bio: "El profesor Eobard Thawne (nacido alrededor de 2151), también conocido como Flash-Reverso, es un velocista metahumano del siglo XXII, un descendiente de Eddie Thawne, un criminal del tiempo, y el archienemigo de Barry Allen/Flash así como un enemigo de las Leyendas.",
      img: "assets/img/flash-reverso.jpeg",
      aparicion: "1949-11-01",
      casa:"DC"
    },
    {
      nombre: "El Joker",
      bio: "El Joker (traducido como el Comodín y el Guasón en Hispanoamérica) es un personaje de ficción, perteneciente a DC Comics y el archienemigo de Batman, además de su antítesis. El Joker es uno de los villanos más influyentes en la historia de los cómics, y uno de los mejor reconocidos a nivel masivo.",
      img: "assets/img/joker.jpeg",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Thanos",
      bio: "fue un señor de la guerra y genocida de Titán, cuyo objetivo principal era traer estabilidad al universo, ya que creía que su enorme población inevitablemente agotaría todo el suministro de recursos disponibles y eso condenaría a las especies a morir.",
      img: "assets/img/thanos.jpeg",
      aparicion: "2016-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Loki",
      bio: "Loki Laufeyson fue el hijo de Laufey, pero fue abandonado por este después de su nacimiento. Tras ser encontrado por el Rey de Asgard, Odín, Loki fue criado por la Familia Real Asgardiana junto con Thor.",
      img: "assets/img/loki.jpeg",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Thaal Sinestro",
      bio: "Sinestro maneja un anillo de poder amarillo que es funcionalmente similar a los de las Linternas Verdes, otorgándole vuelo, la capacidad de sobrevivir en cualquier entorno y la capacidad de crear construcciones de cualquier forma y tamaño. El anillo debe recargarse regularmente con la ayuda de una batería eléctrica con forma de linterna.",
      img: "assets/img/siniestro.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Ronan El Acusador",
      bio: "Es el acusador supremo del Imperio Kree,comúnmente es el ser que tiene curiosidad y interés que devuelve a las cosas muertas. El gobierno militarista de la raza alienígena ficticia conocida como Kree, y comúnmente se lo representa como un adversario de equipos de superhéroes como Los 4 Fantásticos, Los Vengadores y los Guardianes de la Galaxia.",
      img: "assets/img/ronan.png",
      aparicion: "1967-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Ultrón",
      bio: " Es un robot consciente de sí mismo y altamente inteligente creado por Hank Pym, quien desarrolla un complejo de dios y un resentimiento contra Pym y la raza humana.",
      img: "assets/img/ultron.jpeg",
      aparicion: "2015-11-01",
      casa: "Marvel"
    }
  ];

  constructor() { }

  public getVillano = (idx: number) => this.villanos[idx];
  public getVillanos = (): Personaje[] => this.villanos;

  public buscarVillano = (termino: string): Personaje[] => {
    let villanosArr: Personaje[] = [];
    termino = termino.toLowerCase();
    for (let index = 0; index < this.villanos.length; index++) {
      let heroe = this.villanos[index];
      let nombre = heroe.nombre.toLocaleLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        heroe.idx = index;
        villanosArr.push(heroe);
      }
    }
    return villanosArr;
  }
}

