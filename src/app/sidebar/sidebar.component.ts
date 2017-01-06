import {Component, Injectable, Directive} from '@angular/core';
import {Character} from "../character/Character";

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.css'],
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {
  character : Character;

  constructor() {}
}
