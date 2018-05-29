import { LoginService } from './login.service';
import { Cliente } from './cliente';
import { Component } from '@angular/core';

@Component({
  templateUrl: './listaClientes.html'
})

export class ListaClientesComponent {

  clientes: Cliente[];

  constructor(public service: LoginService) {

    service.obtenerClientes().subscribe(
      result => {
        const response = JSON.parse(result);
        this.clientes = response.Cliente;
      }
    );
  }
}
