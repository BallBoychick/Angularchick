import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  // hero: Hero | undefined;
  hero$!: Observable<Hero | undefined>;

  ngOnInit(): void {
    this.hero$ = this.getHero();
  }
  
  getHero(): Observable<Hero | undefined> {
    const id = +this.route.snapshot.paramMap.get('id')!;
    return this.heroService.getHero(id);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.hero$.subscribe(hero => {
  //     if (hero) {
  //       this.heroService.updateHero(hero)
  //         .pipe(
  //           tap(() => {
  //             this.goBack();
  //             this.changeDetectorRef.detectChanges();
  //           })
  //         )
  //         .subscribe();
  //     }
  //   });
  // }
  // save(): void {
  //   this.hero$.subscribe(hero => {
  //     if (hero) {
  //       const updatedHero: Hero = { ...hero, name: this.hero.name };
  //       this.heroService.updateHero(updatedHero)
  //         .pipe(
  //           tap(() => {
  //             this.goBack();
  //             this.changeDetectorRef.detectChanges();
  //           })
  //         )
  //         .subscribe();
  //     }
  //   });
  // }
}
