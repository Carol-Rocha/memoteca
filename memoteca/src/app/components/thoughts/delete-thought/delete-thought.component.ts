import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { IThought } from '../thought';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent implements OnInit {
  pensamento: IThought = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getThoughtById(parseInt(id)).subscribe((thought) => {
        this.pensamento = thought;
      });
    }
  }

  deleteThought() {
    if (this.pensamento.id) {
      this.service.deleteThoughtById(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
