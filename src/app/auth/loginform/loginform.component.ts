import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.emailAndPassword(email, password).then(credentials => {
      this.router.navigate(['/personajes'])
      alert("Login exitoso");

    }).catch(err => {
      alert(err.message);
    })
  }

  onGoogle(){
    this.auth.googleLogin();
  }
}
