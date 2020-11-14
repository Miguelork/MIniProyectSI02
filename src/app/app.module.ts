import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoxpersonComponent } from './components/boxperson/boxperson.component';
import { ListpersonComponent } from './components/listperson/listperson.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoxpersonComponent,
    ListpersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
