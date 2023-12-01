import { Component, OnInit } from '@angular/core';
import { IThought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css'],
})
export class UpdateThoughtComponent implements OnInit {
  thought: IThought = {
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
      this.service.getThoughtById(parseInt(id)).subscribe((pensamento) => {
        this.thought = pensamento;
      });
    }
  }

  updateThought() {
    this.service.updateThought(this.thought).subscribe(() => {
      this.router.navigate(['/listar-pensamentos']);
    });
  }

  cancelButton() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
