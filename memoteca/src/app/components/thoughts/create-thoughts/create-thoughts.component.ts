import { Component, OnInit } from '@angular/core';
import { IThought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent implements OnInit {
  constructor(private service: ThoughtService, private router: Router) {}

  thought: IThought = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  ngOnInit(): void {}

  createThoughts() {
    this.service.createNewThought(this.thought).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    });
  }

  cancelButton() {}
}
