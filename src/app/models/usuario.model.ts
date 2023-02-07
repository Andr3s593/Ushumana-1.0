export interface UsuarioModel {
    id:number;
    nombres:string;
    apellidos:string;
<<<<<<< HEAD
    fecha_de_nacimiento:Date;    
    correo:string;
}
=======
    email:string;
    password:string;
    passwordRepeat:string;
    fechadenacimiento:Date;        
}
export interface CreateUsuarioDto extends Omit<UsuarioModel, 'id'> {

}
export interface UpdateUsuarioDto extends Partial<UsuarioModel> {
  
}
>>>>>>> d67b783feb95734c764f90b611533987a6586d58
