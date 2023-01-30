import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.http.post<any>('http://localhost:4000/api/usuario-Ushumana/', { email, password })
    .subscribe(data => {
    if (data.success) {
    // usuario existe, guardar en local storage o enviar a otra ruta
    } else if (data.message === 'Incorrect password') {
    alert('Contraseña incorrecta');
    } else {
    alert('El usuario que ingresaste no existe');
    }
    });
    }
}
