import {Character} from "../character/Character";
import {Race} from "../character/Race";
import {Gender} from "../character/Gender";
import {ATTRIBUTES} from "./attribute-mocks";
import {DERIVED_VALUES} from "./derivedValue-mocks";

export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Gorim',
    race: Race[Race.Dwarf],
    gender: Gender[Gender.MALE],
    culture: 'Borombri',
    descent: 'Einsiedler',
    apprenticeship: 'Kämpfer',
    moonSign: 'Der Spieler',
    variant: 'Grobian',
    hairColor: 'schwarz',
    eyeColor: 'rot',
    skinColor: 'weiß',
    height: 110,
    weight: 100,
    birthplace: 'Mine',
    appearance: 'wettergezeichnet',
    level: 1,
    attributes: ATTRIBUTES,
    derivedValues: DERIVED_VALUES
  },
  {
    id: 2,
    name: 'Valeria',
    race: Race[Race.Human],
    gender: Gender[Gender.FEMALE],
    culture: 'Gulong',
    descent: 'Priester',
    apprenticeship: 'Heiler',
    moonSign: 'Der Fels',
    variant: 'Heilige Schönheit',
    hairColor: 'blond',
    eyeColor: 'blau',
    skinColor: 'weiß',
    height: 165,
    weight: 60,
    birthplace: 'Burg',
    appearance: 'wunderschön',
    level: 1,
    attributes: ATTRIBUTES,
    derivedValues: DERIVED_VALUES
  },
  {
    id: 3,
    name: 'Giffion',
    race: Race[Race.Human],
    gender: Gender[Gender.FEMALE],
    culture: 'Feuerläufer',
    descent: 'Kriegsvolk',
    apprenticeship: 'Kämpfer',
    moonSign: 'Der Blitz',
    variant: 'Schildmaid',
    hairColor: 'braun',
    eyeColor: 'braun',
    skinColor: 'weiß',
    height: 182,
    weight: 70,
    birthplace: 'Insel',
    appearance: 'wagemutig',
    level: 2,
    attributes: ATTRIBUTES,
    derivedValues: DERIVED_VALUES
  },
  {
    id: 4,
    name: 'Ursel',
    race: Race[Race.Gnome],
    gender: Gender[Gender.FEMALE],
    culture: 'Turubar',
    descent: 'Gesindel',
    apprenticeship: 'Elementarist',
    moonSign: 'Geist der Gedanken',
    variant: 'Gossenhexe',
    hairColor: 'rot',
    eyeColor: 'grün',
    skinColor: 'weiß',
    height: 90,
    weight: 45,
    birthplace: 'Gosse',
    appearance: 'verwahrlost',
    level: 2,
    attributes: ATTRIBUTES,
    derivedValues: DERIVED_VALUES
  }
];
