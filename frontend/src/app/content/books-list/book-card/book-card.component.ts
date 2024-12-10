import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, input, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-book-card',
  standalone: true,
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
  imports: [MatCardModule, MatButtonModule, NgIf],
})
export class BookCardComponent {

  constructor(public authService: AuthService,) {}

  @Input()
  book:any

  @Output()
  deleteBook = new EventEmitter()

  onDeleteBook(bookId:string) {
    this.deleteBook.emit(bookId)
  }

}