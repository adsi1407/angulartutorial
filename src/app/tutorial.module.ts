import { ListaClientesComponent } from './listaClientes.component';
import { LoginComponent } from './login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

const appModules: Routes = [
  { path: '', component: LoginComponent},
  { path: 'listaClientes', component: ListaClientesComponent}
];

@NgModule ({

  imports: [ RouterModule.forRoot(appModules, {})],
  exports: [RouterModule],
  providers: []
})

export class AppRouteModule {}

