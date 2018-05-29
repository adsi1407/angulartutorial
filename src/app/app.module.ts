import { ListaClientesComponent } from './listaClientes.component';
import { HttpModule } from '@angular/http';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouteModule } from './tutorial.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaClientesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
