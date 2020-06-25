import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkerDeatailComponent } from './components/marker-detail/marker-deatail.component';
import { HomeComponent } from './components/home/home.component';
import { EditmarkerComponent } from './components/editmarker/editmarker.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'marker/:id', component: MarkerDeatailComponent },
  { path: 'edit/:id', component: EditmarkerComponent},
  {path: 'search', component: SearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
