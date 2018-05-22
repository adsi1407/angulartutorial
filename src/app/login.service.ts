import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor (private http: Http) {
  }

  login (user: String, pws: String): Observable<any> {
    this.http.get('http://localhost:8080/rest/Usuario?login=' + user + '&clave=' + pws).map(Response => {
      return Response.text();
    });
  }
}
