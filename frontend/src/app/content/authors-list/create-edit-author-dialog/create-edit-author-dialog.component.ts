import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthorsApiService } from '../../../services/authorsApi.service';
import { AuthorsService } from '../../../services/authors.service';
import { BooksApiService } from '../../../services/booksApi.service';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-edit-author-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './create-edit-author-dialog.component.html',
  styleUrl: './create-edit-author-dialog.component.scss'
})
export class CreateEditAuthorDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CreateEditAuthorDialogComponent>);
  public readonly authorsApiService = inject(AuthorsApiService);
  public readonly authorsService = inject(AuthorsService);
  public readonly booksApiService = inject(BooksApiService);
  public readonly authorData: FormGroup

  constructor () {
    this.authorData = new FormGroup({
      name: new FormControl(''),
      birthDate: new FormControl(null),
      deathDate: new FormControl(null),
      nationality: new FormControl(''),
      bio: new FormControl(''),
      photoUrl: new FormControl(''),
    })
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input?.files?.length) {
      const file = input.files[0];
      const fileName = file.name;

      this.authorData.patchValue({ photoUrl: fileName });
    }
  }

  public onSubmit() {
    this.authorsApiService.createAuthors(this.authorData.value)
    .subscribe((res: any) => {
      this.authorsService.createAuthor(res)
    })
    this.dialogRef.close();
  }

}
