import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { UpdateThoughtComponent } from './components/thoughts/update-thought/update-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamentos',
    pathMatch: 'full',
  },
  {
    path: 'criar-pensamento',
    component: CreateThoughtsComponent,
  },
  {
    path: 'listar-pensamentos',
    component: ListThoughtsComponent,
  },
  {
    path: 'editar-pensamento/:id',
    component: UpdateThoughtComponent,
  },
  {
    path: 'deletar-pensamento/:id',
    component: DeleteThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
