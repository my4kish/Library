import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs';
import { LogUser } from '../../types/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public readonly userData: FormGroup

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.userData = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(6)])
    })
  }

  public onSubmit() {

    if (this.userData.valid) {
      this.authService.login(this.userData.value)
        .pipe(
          tap((res: LogUser) => {
            localStorage.setItem('token', res.access_token);
            if(this.userData.value.email === "arlan.amirov@mail.ru") {
              localStorage.setItem('isAdmin', 'Admin');
            }
            this.router.navigate(['']);
          }))
        .subscribe({
          next: (response) => console.log('Authorisation successful:', response),
          error: (error) => console.error('Authorisation failed:', error),
        });
    } else {
      console.log('not valid');
    }

  }
}
