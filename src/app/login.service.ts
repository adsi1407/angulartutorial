import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor (private http: Http) {
  }

  login (user: String, pws: String): Observable<any> {
    return this.http.get('http://localhost:8080/rest/Usuario?login=' + user + '&clave=' + pws).
    map(Response => {
      return Response.text();
    });
  }

  obtenerClientes(): Observable<any> {
    return this.http.get('http://localhost:8080/rest/Cliente').
    map(Response => {
      return Response.text();
    });
  }
}
