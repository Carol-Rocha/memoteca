import { ThoughtService } from './../thought.service';
import { Component, Input, OnInit } from '@angular/core';
import { IThought } from '../thought';

@Component({
  selector: 'app-card-thought',
  templateUrl: './card-thought.component.html',
  styleUrls: ['./card-thought.component.css'],
})
export class CardThoughtComponent implements OnInit {
  @Input() pensamento: IThought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
  };

  @Input() listaFavoritos: IThought[] = [];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {}

  widthOfThought(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  changeFavoriteIcon(): string {
    if (this.pensamento.favorito === false) {
      return 'inativo';
    }
    return 'ativo';
  }

  updateFavorites() {
    this.service.changeFavoriteIcon(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(
        this.listaFavoritos.indexOf(this.pensamento),
        1
      );
    });
  }
}
