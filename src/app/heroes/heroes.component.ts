import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { Observable, Subscription, map, tap } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// export class HeroesComponent implements OnInit {
//   getHeroSubscribe = new Subscription();
//   addHeroSubscribe = new Subscription();
//   deleteHeroSubscribe = new Subscription();

//   heroes!: Hero[];

//   constructor(
//     private heroService: HeroService,
//     private changeDetectorRef: ChangeDetectorRef
//   ) {}

//   ngOnInit() {
//     this.getHeroes();
//   }

//   getHeroes(): void {
//     this.getHeroSubscribe = this.heroService.getHeroes().subscribe((heroes) => {
//       this.heroes = heroes;
//       this.changeDetectorRef.markForCheck();
//     });
//   }

//   add(name: string): void {
//     name = name.trim();
//     if (!name) {
//       return;
//     }
//     this.addHeroSubscribe = this.heroService
//       .addHero({ name } as Hero)
//       .subscribe((hero) => {
//         this.heroes.push(hero);
//         this.changeDetectorRef.markForCheck();
//       });
//   }

//   delete(hero: Hero): void {
//     this.heroes = this.heroes.filter((h) => h !== hero);
//     this.deleteHeroSubscribe = this.heroService
//       .deleteHero(hero)
//       .subscribe(() => this.changeDetectorRef.markForCheck());
//   }

//   ngOnDestroy() {
//     this.getHeroSubscribe.unsubscribe();
//     this.addHeroSubscribe.unsubscribe();
//     this.deleteHeroSubscribe.unsubscribe();
//   }
// }











export class HeroesComponent implements OnInit {
  heroes!: Hero[]; //в подпсике 
  heroes$!: Observable<Hero[]>;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.heroService.getHeroes();
  }

  // getHeroes(): void {
  //   //   this.heroes$ = this.heroService.getHeroes().pipe(
  //   //     tap(res => this.heroes)
  //   //   );
  //   // }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //   .subscribe(heroes => this.heroes = heroes);
  // }

  
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(() => {
  //       this.getHeroes();
  //     });
  // }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(() => {
      this.getHeroes();
    });
  }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }
}