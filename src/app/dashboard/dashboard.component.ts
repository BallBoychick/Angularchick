import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  // ImagePath!: string;
  // heroes: Hero[] = [];
  heroes!: Observable<Hero[]>;
  constructor(private heroService: HeroService) {
    // this.ImagePath = "D:/Angular/angular-tour-of-heroes/src/app/img/background_hero_img.jpg";
   }
   // можно удалить init и воскл знак
  ngOnInit() {
    this.heroes = this.heroService.getHeroes().pipe(
      map(heroes => heroes.slice(0, 4))
    );
  }
} 