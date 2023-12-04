import { Component, OnInit, Input } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { onlyLowercaseLetters } from './thoughts-validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          onlyLowercaseLetters,
        ]),
      ],
      modelo: [''],
      favorito: [false],
    });
  }

  createThoughts() {
    if (this.form.valid) {
      this.service.createNewThought(this.form.value).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
    }
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }

  cancelButton() {}
}
