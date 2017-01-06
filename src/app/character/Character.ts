import {Race} from "./Race";
import {Attribute} from "./Attribute";
import {DerivedValue} from "./DerivedValue";

export class Character {
  id : number;
  name : string;
  race : string;
  gender : string;
  culture : string;
  descent : string;
  apprenticeship : string;
  moonSign: string;
  variant : string;
  hairColor : string;
  eyeColor : string;
  skinColor : string;
  height : number;
  weight : number;
  birthplace : string;
  appearance : string;
  level: number;
  attributes : Attribute[];
  derivedValues : DerivedValue[];
}
