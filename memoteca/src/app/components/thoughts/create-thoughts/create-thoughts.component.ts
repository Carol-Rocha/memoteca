import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent implements OnInit {
  constructor() {}

  thoughts = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  ngOnInit(): void {}

  createThoughts() {
    alert('Pensamento criado!');
  }

  cancelButton() {
    alert('Fechar formulario');
  }
}
