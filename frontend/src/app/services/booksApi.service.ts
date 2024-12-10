import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { API_URL } from "../constants/constants";
import { Books } from "../types/books.interface";


@Injectable({providedIn: 'root',})
export class BooksApiService {

  booksSig = signal<Books[]>([]);

  constructor(
    private readonly http: HttpClient,
  ) {}

  public getBooks() {
    return this.http
    .get<Books[]>(`${API_URL}/books`)
    .subscribe((books: Books[]) => {
      this.booksSig.set(books);
    });
  }

  public createBook(books: Books) {
    return this.http
    .post<Books>(`${API_URL}/books`, books)
    .subscribe((newBooks: Books) => {
      this.booksSig.update((oldBooks) => [...oldBooks, newBooks]);
    });
  }

  public deleteBook(bookId: string) {
    return this.http
    .delete(`${API_URL}/books/${bookId}`)
    .subscribe(() => {
      this.booksSig.update((books) => books.filter((book) => book._id !== bookId))
    });
  }

}