import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { onlyLowercaseLetters } from '../create-thoughts/thoughts-validators';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css'],
})
export class UpdateThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getThoughtById(parseInt(id)).subscribe((pensamento) => {
        this.form = this.formBuilder.group({
          id: [pensamento.id],
          conteudo: [
            pensamento.conteudo,
            Validators.compose([
              Validators.required,
              Validators.pattern(/(.|\s)*\S(.|\s)*/),
            ]),
          ],
          autoria: [
            pensamento.autoria,
            Validators.compose([
              Validators.required,
              Validators.minLength(3),
              onlyLowercaseLetters,
            ]),
          ],
          modelo: [pensamento.modelo],
        });
      });
    }
  }

  updateThought() {
    if (this.form.valid) {
      this.service.updateThought(this.form.value).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
    }
  }

  cancelButton() {
    this.router.navigate(['/listar-pensamentos']);
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
