import { CreateUsuarioDto } from 'src/app/models/usuario.model';
import { RegisterHttpService } from './../../services/register-http.service';
import { catchError } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {  
  createUsuario: CreateUsuarioDto = {nombres:"",apellidos:"",email:"",password:"",fecha_de_nacimiento: new Date()};
  constructor(private usuariotHttpService: RegisterHttpService, private router: Router) {
    this.initUsuario();
  }
  initUsuario(){
    this.createUsuario = {nombres:"",apellidos:"",email:"",password:"",fecha_de_nacimiento: new Date()};
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
    const data = {            
      nombres: this.createUsuario.nombres,
      apellidos: this.createUsuario.apellidos,
      email: this.createUsuario.email,
      password: this.createUsuario.password,
      fecha_de_nacimiento: this.createUsuario.fecha_de_nacimiento
    }
    this.usuariotHttpService.create(data).pipe(
      catchError(error => {
        if (error.status === 409) {
          alert("Hubo un error al crear el registro");
          } else {
          alert("Este correo electrónico ya está en uso. Por favor, elige otro.");
          }
        return throwError(() => error);
      })
    ).subscribe(response => {
      console.log(response);
      alert("Usuario creado exitosamente");
      this.router.navigate(['/login']);
    });
  }

  updateUsuario() {
    const data = {
      nombres: "RICARDO ANDRES",
      apellidos: "PIEDRA CHICAIZA",
      email: "13245",
      password: "Ricardo ANDRES",
      fecha_de_nacimiento: new Date("1990-03-15")
    }
    this.usuariotHttpService.update(data, 5).subscribe(response => {
      console.log(response);
    }
    );
  }
  deleteUsuario() {
    this.usuariotHttpService.destroy(5).subscribe(response => {
      console.log(response)
    }
    )
  }
}
