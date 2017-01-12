import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {CharacterDetailGeneralComponent} from './character-detail-general/character-detail-general.component';
import {CharacterListComponent} from './character-list/character-list.component';
import {ContactComponent} from './contact/contact.component';
import {CharacterService} from "./services/character-service";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MaterialModule} from "@angular/material";
import {CharacterDetailDerivedValuesComponent} from "./character-detail-derived-values/character-detail-derived-values.component";

@NgModule({
declarations: [
    AppComponent,
    CharacterDetailGeneralComponent,
    CharacterDetailDerivedValuesComponent,
    CharacterListComponent,
    ContactComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, {useHash: true})
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
