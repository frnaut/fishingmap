import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { AngularFireModule } from '@angular/fire';

import { environment } from 'src/environments/environment';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StopPropagationDirective } from './directives/stop-propagation.directive';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    StopPropagationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
