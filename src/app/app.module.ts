import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {CharacterListComponent} from './character-list/character-list.component';
import {ContactComponent} from './contact/contact.component';
import {CharacterService} from "./services/character-service";
import {SidebarComponent} from "./sidebar/sidebar.component";

@NgModule({
declarations: [
    AppComponent,
    CharacterDetailComponent,
    CharacterListComponent,
    ContactComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: true})
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
