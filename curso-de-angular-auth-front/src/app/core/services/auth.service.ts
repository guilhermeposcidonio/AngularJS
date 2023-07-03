import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  public sign(payload: { email: string, password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.url}/sign`, payload).pipe(
      map((res) => {
        localStorage.removeItem('access_token');//remove do local storage antes de salvar para previnir erros 
        localStorage.setItem('access_token', JSON.stringify(res.token))
        return this.router.navigate(['admin'])

      }),
      catchError((e) => {
        console.log(e);
        if (e.error.message) return throwError(() => e.error.message);
        return throwError(() => 'No momento não estamos conseguindo validar estes dados, tente novamente mais tarde !');
      })
    )
  }

  public logout() {
    localStorage.removeItem('access_token');
    return this.router.navigate([''])
  }

  public isAuthenticade(): boolean {
    const token = localStorage.getItem('acess_token');
    if (!token) return false;
    const jwtHelper = new JwtHelperService();
    return !jwtHelper.isTokenExpired(token); //verifica se o token esta expirado
  }
}
