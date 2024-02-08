// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../../../core/models/user.model';
import { UserCredentialsModel } from '../../../core/models/userCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/api/v1/auth';

  constructor(private http: HttpClient) { }

  register(user: UserModel): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: UserCredentialsModel): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/authenticate`, credentials, { responseType: 'text' as 'json' });
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
    // return false;
  }

}
