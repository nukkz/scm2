import { Routes } from '@angular/router';

import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { ContactComponent } from './contact/contact.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CharacterListComponent },
  { path: 'detail/:id', component: CharacterDetailComponent },
  { path: 'contact', component: ContactComponent }
];

