export interface UsuarioModel {
    id:number;
    nombres:string;
    apellidos:string;
    email:string;
    password:string;
    passwordRepeat:string;
    fechadenacimiento:Date;        
}
export interface CreateUsuarioDto extends Omit<UsuarioModel, 'id'> {

}
export interface UpdateUsuarioDto extends Partial<UsuarioModel> {
  
}
