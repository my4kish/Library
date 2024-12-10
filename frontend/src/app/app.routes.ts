import { Routes } from '@angular/router';
import { BooksListComponent } from './content/books-list/books-list.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './guards/auth.guard';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
  {
    path:'',
    component: ContentComponent,
    canActivate: [authGuard()]
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
    canActivate: [authGuard()]
  },

];
