import { Component, OnInit } from '@angular/core';
import { IThought } from '../thought';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent implements OnInit {
  constructor() {}

  thoughts: IThought = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  ngOnInit(): void {}

  createThoughts() {
    alert('Pensamento criado!');
  }

  cancelButton() {}
}
