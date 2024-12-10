import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Authors } from "../types/authors.interface";


@Injectable({providedIn: "root"})
export class AuthorsService {
  public readonly authorSubject = new BehaviorSubject<Authors[]>([]);

  public setAuthor(authors: Authors[]) {
    return this.authorSubject.next(authors);
  }

  public createAuthor(author: Authors) {
    this.authorSubject.next([...this.authorSubject.value, author]);

    // const authorIsExisting = this.authorSubject.value.find(
    //   currentElement => currentElement.name === author.name
    // )

    // authorIsExisting !== undefined ? alert('Такой автор уже существует') : this.authorSubject.next([...this.authorSubject.value, author]);
  }

  public updateAuthor(authorId: string, newAuthor: Authors) {
    this.authorSubject.next(
      this.authorSubject.value.map(
        oldAuthor => oldAuthor._id === authorId ? newAuthor : oldAuthor
      )
    )
  }
  
  public deleteAuthor(authorId: string) {
    this.authorSubject.next(
      this.authorSubject.value.filter(
        item => authorId !== item._id
      )
    )
  }

}