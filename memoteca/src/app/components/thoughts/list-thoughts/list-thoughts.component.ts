import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IThought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  thoughtsList: IThought[] = [];
  currentPage: number = 1;
  existMoreThoughts: boolean = true;
  filter: string = '';
  favorite: boolean = false;
  listaFavoritos: IThought[] = [];
  title: string = 'Meu Mural';

  constructor(private service: ThoughtService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .getAllThoughts(this.currentPage, this.filter, this.favorite)
      .subscribe((thoughtsList) => {
        this.thoughtsList = thoughtsList;
      });
  }

  loadMoreThoughts() {
    this.service
      .getAllThoughts(++this.currentPage, this.filter, this.favorite)
      .subscribe((thoughtsList) => {
        this.thoughtsList.push(...thoughtsList);

        if (!thoughtsList.length) {
          this.existMoreThoughts = false;
        }
      });
  }

  searchThoughts() {
    this.existMoreThoughts = true;
    this.currentPage = 1;
    this.service
      .getAllThoughts(this.currentPage, this.filter, this.favorite)
      .subscribe((thoughtsList) => {
        this.thoughtsList = thoughtsList;
      });
  }

  reloadComponent() {
    this.favorite = false;
    this.currentPage = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  listFavorites() {
    this.title = 'Meus Favoritos';
    this.favorite = true;
    this.existMoreThoughts = true;
    this.currentPage = 1;
    this.service
      .getAllThoughts(this.currentPage, this.filter, this.favorite)
      .subscribe((thoughtsList) => {
        this.thoughtsList = thoughtsList;
        this.listaFavoritos = thoughtsList;
      });
  }
}
