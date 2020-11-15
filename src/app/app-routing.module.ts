import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxpersonComponent } from './components/boxperson/boxperson.component';
import { ListpersonComponent } from './components/listperson/listperson.component';

const routes: Routes = [{path: 'personajes', component: ListpersonComponent}, 
{path: 'personajes-d/:id', component: BoxpersonComponent}];
//{path: 'personajes-d/:id', loadChildren}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
