import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'ANAKIN SKYWALKER',  img: 'assets/img/anakin-skywalker-main_23e5105b.jpeg'},
      { id: 2, name: 'PADMÉ AMIDALA',  img: 'assets/img/Padme-Amidala_05d50c8a.jpeg'},
      { id: 3, name: 'OBI-WAN KENOBI', img: 'assets/img/obi_wan.jpeg' },
      { id: 4, name: 'Darth-Maul', img: 'assets/img/Darth-Maul_632eb5af.jpeg' },
      { id: 5, name: 'Mace-Windu', img: 'assets/img/Mace-Windu_b35242e5.jpeg' },
      { id: 6, name: 'jangofett', img: 'assets/img/databank_jangofett_01_169_884cefab.jpeg' },
      { id: 7, name: 'jarjarbinks',  img: 'assets/img/databank_jarjarbinks_01_169_c70767ab.jpeg'},
      { id: 8, name: 'Yoda', img: 'assets/img/Yoda-Retina_2a7ecc26.jpeg' }  
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id!)) + 1 : 11;
  }
}