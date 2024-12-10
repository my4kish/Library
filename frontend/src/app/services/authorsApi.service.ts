import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Authors } from "../types/authors.interface";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../constants/constants";
import { AppComponent } from "../app.component";


@Injectable({providedIn:'root'})
export class AuthorsApiService {
  private readonly authorsApi = inject(HttpClient);

  public getAuthors() {
    return this.authorsApi.get(`${API_URL}/authors`)
  }

  public createAuthors(authors: Authors) {
    return this.authorsApi.post(`${API_URL}/authors`, authors );
  }

  public ubdateAuthors(authorId: string, author: Authors) {
    return this.authorsApi.patch(`${API_URL}/authors/${authorId}`, author);
  }

  public deleteAuthors(authorId: string) {
    return this.authorsApi.delete(`${API_URL}/authors/${authorId}`);
  }

}