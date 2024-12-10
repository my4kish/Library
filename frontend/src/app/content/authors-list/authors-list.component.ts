import { Component, inject, OnInit } from '@angular/core';
import { AuthorCardComponent } from './author-card/author-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AuthorsService } from '../../services/authors.service';
import { AuthorsApiService } from '../../services/authorsApi.service';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxSearchFilterModule } from 'ngx-search-filter';

@Component({
  selector: 'app-authors-list',
  standalone: true,
  imports: [
    AuthorCardComponent,
    NgFor,
    NgxPaginationModule,
    NgxSearchFilterModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './authors-list.component.html',
  styleUrl: './authors-list.component.scss'
})
export class AuthorsListComponent implements OnInit {
  term = '';
  authors: any[] = [];
  public readonly authorsApiService = inject(AuthorsApiService);
  public readonly authorsService = inject(AuthorsService);
  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.authorsApiService.getAuthors().subscribe(
      (res:any) => {
        this.authorsService.setAuthor(res);
      }
    )
    this.authorsService.authorSubject.subscribe((data) => {
      this.authors = data;
    });
  }

  public deleteAuthor(authorId: string) {
    this.authorsApiService.deleteAuthors(authorId).subscribe(res => {
      this.authorsService.deleteAuthor(authorId);
    }
    )
  }

}
