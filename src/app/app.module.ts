import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoxpersonComponent } from './components/boxperson/boxperson.component';
import { ListpersonComponent } from './components/listperson/listperson.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AuthModule } from './auth/auth.module';
import { SmallboxpersonComponent } from './components/smallboxperson/smallboxperson.component';
import { BarraBusqComponent } from './components/barra-busq/barra-busq.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiRMService } from 'src/app/services/api-rm.service';
import { FavoriteComponent } from './components/favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoxpersonComponent,
    ListpersonComponent,
    SmallboxpersonComponent,
    BarraBusqComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    HttpClientModule,
  ],
  providers: [ApiRMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
