import { Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  {
    path:'',
    component: BooksListComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path:'app-admin',
    component: AdminComponent,
  },

];
