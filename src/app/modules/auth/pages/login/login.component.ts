import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserCredentialsModel } from '../../../../core/models/userCredentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials: UserCredentialsModel = {
    email: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(){
    this.authService.login(this.credentials).subscribe({
      next: (token) => {
        localStorage.setItem('token', token); // Almacenar el token en localStorage
        this.router.navigate(['/home/films']);
      },
      error: (e) => {
        this.errorMessage = 'Error al iniciar sesión. Por favor, verifica tus credenciales.';
        console.error('Error de inicio de sesión:', e);
      }
    });
  }
}
