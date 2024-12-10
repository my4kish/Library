import { Component, inject, OnInit } from '@angular/core';
import { AuthorCardComponent } from './author-card/author-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { AuthorsService } from '../../services/authors.service';
import { AuthorsApiService } from '../../services/authorsApi.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-authors-list',
  standalone: true,
  imports: [
    AuthorCardComponent,
    NgFor,
    AsyncPipe,
    NgxPaginationModule,
  ],
  templateUrl: './authors-list.component.html',
  styleUrl: './authors-list.component.scss'
})
export class AuthorsListComponent implements OnInit {

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
  }

  public deleteAuthor(authorId: string) {
    this.authorsApiService.deleteAuthors(authorId).subscribe(res => {
      this.authorsService.deleteAuthor(authorId);
    }
    )
  }

}
