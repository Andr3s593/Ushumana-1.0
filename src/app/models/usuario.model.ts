export interface UsuarioModel {
    id:number;
    nombres:string;
    apellidos:string;
    email:string;
    password:string;
    passwordRepeat:string;
    fecha_de_nacimiento:Date;        
}
export interface CreateUsuarioDto extends Omit<UsuarioModel, 'id'> {

}
export interface UpdateUsuarioDto extends Partial<UsuarioModel> {
  
}
