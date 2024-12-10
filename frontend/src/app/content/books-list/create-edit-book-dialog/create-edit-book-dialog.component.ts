import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthorsApiService } from '../../../services/authorsApi.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { AuthorsService } from '../../../services/authors.service';
import { BooksApiService } from '../../../services/booksApi.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-book-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgFor,
    AsyncPipe,
    MatButtonModule,
  ],
  templateUrl: './create-edit-book-dialog.component.html',
  styleUrl: './create-edit-book-dialog.component.scss'
})
export class CreateEditBookDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateEditBookDialogComponent>);
  public readonly authorsApiService = inject(AuthorsApiService);
  public readonly authorsService = inject(AuthorsService);
  public readonly booksApiService = inject(BooksApiService);
  public readonly bookData: FormGroup

  constructor() {

    this.authorsApiService.getAuthors().subscribe(
      (res:any) => {
        this.authorsService.setAuthor(res);
      }
    )

    this.bookData = new FormGroup({
      title: new FormControl(''),
      authorId: new FormControl(''),
      genres: new FormControl(''),
      description: new FormControl(''),
      publicationDate: new FormControl(''),
      language: new FormControl(''),
      pages: new FormControl(''),
      coverImageUrl: new FormControl('')
    })    

  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input?.files?.length) {
      const file = input.files[0];
      const fileName = file.name;

      this.bookData.patchValue({ coverImageUrl: fileName });
    }
  }

  public onSubmit() {
    this.booksApiService.createBook(this.bookData.value);
    this.dialogRef.close();
  }

}
