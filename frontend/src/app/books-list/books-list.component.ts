import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BookCardComponent } from "./book-card/book-card.component";

@Component({
  selector: 'app-books-list',
  standalone: true,
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss',
  imports: [BookCardComponent],
})
export class BooksListComponent{

}