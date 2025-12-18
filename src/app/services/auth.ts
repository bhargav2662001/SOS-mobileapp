import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  email: string;
  fullName: string;
  username: string;
  phoneNumber: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://127.0.1.1:8086/api/auth';

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(payload: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, payload);
  }
validateToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: token   // backend expects raw token (NOT Bearer)
      // If backend expects Bearer:
      // Authorization: `Bearer ${token}`
    });

    return this.http.get(
      `${this.apiUrl}/validate-token`,
      { headers }
    );
  }
}
