import { CreateUsuarioDto } from 'src/app/models/usuario.model';
import { RegisterHttpService } from './../../services/register-http.service';
import { catchError } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {  
  createUsuario: CreateUsuarioDto = {nombres:"",apellidos:"",email:"",password:"",passwordRepeat:"",fechadenacimiento: new Date()};
  constructor(private usuariotHttpService: RegisterHttpService, private router: Router) {
    this.initUsuario();
  }
  initUsuario(){
    this.createUsuario = {nombres:"",apellidos:"",email:"",password:"", passwordRepeat:"",fechadenacimiento: new Date()};
  }

  getUsuarios() {
    this.usuariotHttpService.getAll().subscribe(response => {
      console.log(response);
    });
  }
  getUsuario() {
    this.usuariotHttpService.getOne(2).subscribe(response => {
      console.log(response);
    });
  }  
  
  createUsuarios() {
    if (this.createUsuario.password !== this.createUsuario.passwordRepeat) {
      Swal.fire(
        'Error en la Contraseña',
        'Las contraseñas no coinciden. Por favor, inténtelo de nuevo.',
        'error'
      )         
      return;
    }
    if (this.createUsuario.password.length < 8) {
      Swal.fire(
        'Contraseña demasiado corta',
        'La contraseña debe tener al menos 8 caracteres. Por favor, inténtelo de nuevo.',
        'error'
      );
      return;
    }
    if (!this.createUsuario.nombres || !this.createUsuario.apellidos || !this.createUsuario.email || !this.createUsuario.password || !this.createUsuario.passwordRepeat || !this.createUsuario.fechadenacimiento) {
      Swal.fire(
        'Campos Vacios',
        'Todos los campos son requeridos. Por favor, inténtelo de nuevo.',
        'error'
      )         
      return;
    }

    const fechaActual = new Date();
    const fechaNacimiento = new Date(this.createUsuario.fechadenacimiento);
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if (edad < 18) {
      Swal.fire(
        'Edad Insuficiente',
        'Para registrarse debe tener al menos 18 años. Por favor, inténtelo de nuevo.',
        'error'
      )         
      return;
    }

    const data = {            
      nombres: this.createUsuario.nombres,
      apellidos: this.createUsuario.apellidos,
      email: this.createUsuario.email,
      password: this.createUsuario.password,
      passwordRepeat: this.createUsuario.passwordRepeat,
      fechadenacimiento: this.createUsuario.fechadenacimiento
    }
    this.usuariotHttpService.create(data).pipe(
      catchError(error => {
        if (error.status === 409) {          
          alert("Hubo un error al crear el registro");
          } else {
            Swal.fire(
              'Error Email',
              'Este correo electrónico ya está en uso. Por favor, elige otro.',
              'error'
            )          
          }
        return throwError(() => error);
      })
    ).subscribe(response => {
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Usuario Registrado',
        text: 'Usuario creado exitosamente',        
      })      
      this.router.navigate(['/login']);
    });
  }

  

 
  deleteUsuario() {
    this.usuariotHttpService.destroy(5).subscribe(response => {
      console.log(response)
    }
    )
  }
}
