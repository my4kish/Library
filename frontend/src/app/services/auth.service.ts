import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthUser } from "../types/user.interface";
import { API_URL } from "../constants/constants";


@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {}

  signUp(userData: AuthUser) {
    return this.http.post(`${API_URL}/users`, userData).subscribe()
  }

}