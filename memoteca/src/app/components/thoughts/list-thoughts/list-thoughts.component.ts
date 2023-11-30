import { Component, OnInit } from '@angular/core';
import { IThought } from '../thought';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  thoughtsList: IThought[] = [];

  constructor() {}

  ngOnInit(): void {}
}
