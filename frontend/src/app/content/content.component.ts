import { Component } from '@angular/core';
import { BooksListComponent } from './books-list/books-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthorsListComponent } from './authors-list/authors-list.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AuthorsListComponent ,BooksListComponent, MatTabsModule, ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
