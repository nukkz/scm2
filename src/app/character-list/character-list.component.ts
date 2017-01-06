import {Component} from '@angular/core';
import {Character} from "../character/Character";
import {CharacterService} from "../services/character-service";
import {Race} from "../character/Race";

@Component({
  selector: 'home',
  styleUrls: ['./character-list.component.css'],
  templateUrl: './character-list.component.html'
})

export class CharacterListComponent {
  characters: Character[];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.characterService.getCharacters().then(characters => this.characters = characters);
  }
}
