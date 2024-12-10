import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  public readonly userData: FormGroup

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
    this.userData = new FormGroup ({
      username: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(6)])
    })
  }

  public onSubmit() {
    if (this.userData.valid) {
      this.authService.signUp(this.userData.value)
      .pipe(
        tap(() => {
          this.router.navigate(['login']);
        })
      )
      .subscribe({
        next: (response) => console.log('Registration successful:', response),
        error: (error) => console.error('Registration failed:', error),
      });
    } else {
      console.log('Form is not valid:', this.userData.errors);
    }
  }
  

}
