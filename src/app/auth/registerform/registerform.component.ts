import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  constructor(public auth: AuthService, public db: AngularFirestore, public router: Router) { }

  ngOnInit(): void {
  }
  public onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const password2 = form.value.password2;
    const nombre2 = form.value.nombre2;
    const apellido2 = form.value.apellido2;
    if(password == password2) {
      this.auth.signUp(email, password).then((userCredentials) => {
        const FireUser = userCredentials.user;
        alert("Registro Exitoso");
  
        const data = {
          uid: FireUser.uid,
          email: email,
          nombre: nombre2,
          apellido: apellido2
        };
      
        this.db.collection('users').doc(FireUser.uid).set(data)
        .then(()=> {
          this.auth.emailAndPassword(email, password).then(() => {
            this.router.navigate(['/personajes]']);
          }).catch(err => {
            alert(err.message);
          })
        }).catch(err => {
          alert(err.message);
        })
      }).catch(err => {
        alert(err.message);
      })
    } else{
      alert("Las contraseñas no coinciden");
    }
    }
    

}
