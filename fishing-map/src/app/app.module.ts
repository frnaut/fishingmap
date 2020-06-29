import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { FirebaseModule } from './modules/firebase/firebase.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MarkerDeatailComponent } from './components/marker-detail/marker-deatail.component';
import { HomeComponent } from './components/home/home.component';
import { EditmarkerComponent } from './components/editmarker/editmarker.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DeletemarkerComponent } from './components/shared/deletemarker/deletemarker.component';





@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MarkerDeatailComponent,
    HomeComponent,
    EditmarkerComponent,
    SearchComponent,
    LoginComponent,
    NavbarComponent,
    DeletemarkerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirebaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
