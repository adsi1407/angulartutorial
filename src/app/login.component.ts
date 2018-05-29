import { Cliente } from './cliente';
import { Router } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { LoginService } from './login.service';
import { error } from 'protractor';

@Component({
  templateUrl: './login.html'
})

export class LoginComponent {
  userName: String = '';
  pws: String = '';
  errorMessage: String = '';

constructor(public service: LoginService, public cliente: Router) {
}

  onLogin() {
    this.service.login(this.userName, this.pws).subscribe(
      result => {
        alert('Autenticado');
        this.cliente.navigate(['cliente.html']);
      },
      error => {
        console.log(<any> error);
      }
    );

  }
}
