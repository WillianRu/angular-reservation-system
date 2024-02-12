import { Component } from '@angular/core';
import { UserModel } from '../../../../core/models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userData : UserModel = {
    id: 0,
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    role : "USER"
  }

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(){
    this.authService.register(this.userData).subscribe({
      next: (response) => {
        console.log('Usuario creado', response);
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        console.error('Error al crear el usuario', error);
      }
    });
  }
}


