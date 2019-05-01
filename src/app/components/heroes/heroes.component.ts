import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

    heroes: Heroe[] = [];

  // tslint:disable-next-line:variable-name
  constructor( private _heroesService: HeroesService) {
   }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

  }

}
