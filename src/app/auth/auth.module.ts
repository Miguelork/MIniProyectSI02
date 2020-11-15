import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard } from './auth.guard';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    FormsModule
  ],
  declarations: [LoginformComponent,RegisterformComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }