import { Component } from "@angular/core";
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-book-card',
  standalone: true,
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
  imports: [MatCardModule],
})
export class BookCardComponent {

}