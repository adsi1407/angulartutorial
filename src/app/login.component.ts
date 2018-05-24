import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { error } from 'protractor';

@Component({
  templateUrl: './login.html'
})

export class LoginComponent {
  userName: String = '';
  pws: String = '';
  errorMessage: String = '';

constructor(public service: LoginService) {
}

  onLogin() {
    this.service.login(this.userName, this.pws).subscribe(
      result => {
        alert('Autenticado');
      },
      error => {
        console.log(<any> error);
      }
    );

  }
}
