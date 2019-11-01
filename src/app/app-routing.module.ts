import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListResolver } from './list/list-resolver';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    resolve: {
      movies: ListResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }