import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListpersonComponent } from './components/listperson/listperson.component';

const routes: Routes = [{path: 'personajes', component: ListpersonComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
