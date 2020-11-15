import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListpersonComponent } from './components/listperson/listperson.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

const routes: Routes = [{path: 'personajes', component: ListpersonComponent}, 
{path: 'fav', component: FavoriteComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
