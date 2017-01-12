import { Routes } from '@angular/router';

import { CharacterDetailGeneralComponent } from './character-detail-general/character-detail-general.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { ContactComponent } from './contact/contact.component';
import {CharacterDetailDerivedValuesComponent} from "./character-detail-derived-values/character-detail-derived-values.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CharacterListComponent },
  { path: 'detail/general/:id', component: CharacterDetailGeneralComponent },
  { path: 'detail/derived-values/:id', component: CharacterDetailDerivedValuesComponent},
  { path: 'contact', component: ContactComponent }
];

