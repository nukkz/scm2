///<reference path="../sidebar/sidebar.component.ts"/>
import {Component, OnInit, Injectable} from '@angular/core';
import {Character} from "../character/Character";
import {CharacterService} from "../services/character-service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Location} from "@angular/common";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'about',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})

export class CharacterDetailComponent implements OnInit {
  character: Character;
  id: number;

  constructor(private characterService: CharacterService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.characterService.getCharacter(+params['id']))
      .subscribe(hero => this.character = hero);
  }

  goBack() : void {
    this.location.back();
  }
}
