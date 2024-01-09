import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', superpower: 'Super Strength' },
      { id: 13, name: 'Bombasto', superpower: 'Explosive Energy' },
      { id: 14, name: 'Celeritas', superpower: 'Super Speed' },
      { id: 15, name: 'Magneta', superpower: 'Magnetic Manipulation' },
      { id: 16, name: 'RubberMan', superpower: 'Elasticity' },
      { id: 17, name: 'Dynama', superpower: 'Electricity Control' },
      { id: 18, name: 'Dr. IQ', superpower: 'Genius Intellect' },
      { id: 19, name: 'Magma', superpower: 'Molten Lava Manipulation' },
      { id: 20, name: 'Tornado', superpower: 'Weather Manipulation' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
