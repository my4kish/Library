import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CreateEditBookDialogComponent } from '../content/books-list/create-edit-book-dialog/create-edit-book-dialog.component';
import { CreateEditAuthorDialogComponent } from '../content/authors-list/create-edit-author-dialog/create-edit-author-dialog.component';

@Component({
  selector: 'header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    RouterModule, 
    NgIf,
  ],
})
export class HeaderComponent{

  constructor(
    public authService: AuthService,
    private matDialog: MatDialog
  ) {}

  public logout() {
    this.authService.logout();
  }

  public openBookDialog() {
    const dialogRef = this.matDialog.open(CreateEditBookDialogComponent);

    dialogRef.afterClosed()
  }

  public openAuthorDialog() {
    const dialogRef = this.matDialog.open(CreateEditAuthorDialogComponent);

    dialogRef.afterClosed()
  }

}
