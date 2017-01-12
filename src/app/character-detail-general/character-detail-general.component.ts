import {Component, OnInit, Injectable} from '@angular/core';
import {Character} from "../character/Character";
import {CharacterService} from "../services/character-service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Location} from "@angular/common";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'character-detail-general',
  templateUrl: './character-detail-general.component.html',
  styleUrls: ['./character-detail-general.component.css'],
})

export class CharacterDetailGeneralComponent implements OnInit {
  character: Character;
  id: number;

  constructor(private characterService: CharacterService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.characterService.getCharacter(+params['id']))
      .subscribe(character => this.character = character);
  }

  goBack(): void {
    this.location.back();
  }
}
