import {Character} from "../character/Character";
import {Http} from "@angular/http";
import {CHARACTERS} from "../mocks/character-mocks";
import {Injectable} from "@angular/core";

@Injectable()
export class CharacterService {
  private selectedCharacter: Character;

  constructor() {
  }

  public getCharacters(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }

  public getCharacter(id: number): Promise<Character> {
    return this.getCharacters().then(characters => characters.find(character => character.id == id));
  }
}
