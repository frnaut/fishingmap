import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkerDeatailComponent } from './components/marker-detail/marker-deatail.component';
import { HomeComponent } from './components/home/home.component';
import { EditmarkerComponent } from './components/editmarker/editmarker.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { FirebaseGuard } from './guards/firebase.guard';
import { DeletemarkerComponent } from './components/shared/deletemarker/deletemarker.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate:[FirebaseGuard] },
  { path: 'marker/:id', component: MarkerDeatailComponent, canActivate:[FirebaseGuard] },
  { path: 'edit/:id', component: EditmarkerComponent, canActivate:[FirebaseGuard] },
  { path: 'delete/:id', component: DeletemarkerComponent, canActivate: [FirebaseGuard] },
  { path: 'search', component: SearchComponent, canActivate:[FirebaseGuard] },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
