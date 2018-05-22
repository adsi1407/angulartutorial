import { Component } from '@angular/core';

@Component({
  templateUrl: './login.html'
})

export class LoginComponent {
  userName: String = '';
  pws: String = '';
  errorMessage: String = '';

  onLogin() {
    alert('Click');
  }
}
