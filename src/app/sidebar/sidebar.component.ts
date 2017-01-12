import {Component, Injectable, Directive, OnInit, Input} from '@angular/core';
import {Character} from "../character/Character";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'sidebar',
  styleUrls: ['./sidebar.component.css'],
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent {
  @Input() id : number;

  constructor(){}


}
