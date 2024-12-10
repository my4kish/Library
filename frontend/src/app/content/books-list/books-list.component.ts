import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { BookCardComponent } from "./book-card/book-card.component";
import { BooksApiService } from "../../services/booksApi.service";
import { FormsModule } from "@angular/forms";
import { Books } from "../../types/books.interface";
import { NgFor } from "@angular/common";
import { AuthorsApiService } from "../../services/authorsApi.service";
import { NgxPaginationModule } from "ngx-pagination";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxSearchFilterModule } from "ngx-search-filter";

@Component({
  selector: 'app-books-list',
  standalone: true,
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss',
  imports: [
    BookCardComponent, 
    FormsModule, 
    NgFor,
    NgxPaginationModule,
    MatFormFieldModule, 
    MatInputModule,
    NgxSearchFilterModule,
  ],
})
export class BooksListComponent implements OnInit{
  term = '';
  public readonly booksApiService = inject(BooksApiService);
  totalLength: any;
  page: number = 1;


  constructor() {}
  
  ngOnInit(): void {
    this.booksApiService.getBooks();
  }

  public deleteBook(bookId: string) {
    this.booksApiService.deleteBook(bookId);
  }

  public onSubmit() {
    // const newBook: Books = {
    //   title: "Example Book Title",
    //   authorId: ["author1", "author2"],
    // };
  
    // this.booksApiService.createBook(newBook);
  }

}