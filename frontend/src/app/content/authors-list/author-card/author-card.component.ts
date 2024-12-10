import { DatePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-author-card',
  standalone: true,
  imports: [
    MatCardModule,
    DatePipe,
    MatButtonModule,
    NgIf,
  ],
  templateUrl: './author-card.component.html',
  styleUrl: './author-card.component.scss'
})
export class AuthorCardComponent {

  constructor(public authService: AuthService,) {}

  @Input()
  author:any

  @Output()
  deleteAuthor = new EventEmitter()

  onDeleteAuthor(authorId:string) {
    this.deleteAuthor.emit(authorId)
  }

}
