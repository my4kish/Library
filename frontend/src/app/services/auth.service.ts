import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthUser, LogUser } from "../types/user.interface";
import { API_URL } from "../constants/constants";
import { Observable } from "rxjs";
import { Router } from "@angular/router";


@Injectable({
  providedIn: "root",
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public isAdmin(): boolean {
    const isAdmin = localStorage.getItem('isAdmin');
    return !!isAdmin;
  }
  
  public signUp(userData: AuthUser): Observable<any> {
    return this.http.post(`${API_URL}/users`, userData);
  }

  public login(userData: AuthUser): Observable<any> {
    return this.http.post<LogUser>(`${API_URL}/auth/login`, userData);
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/login']);
  }

}