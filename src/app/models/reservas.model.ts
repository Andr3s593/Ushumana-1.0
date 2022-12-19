import { ServicioModel } from "./servicio.model";
import { UsuarioModel } from "./usuario.model";

export interface ReservasModel{
    id:number;
    usuario:UsuarioModel;
    servicio:ServicioModel;
    detalles:string;
    numero_adultos:number;
    numero_niños:number;
    mascotas:number;
}
export interface CreateReservaDto extends Omit<ReservasModel, 'id'|'usuario'|'servicio'>{
    servicioId:number;
}
export interface UpdateReservaDto extends Partial<ReservasModel>{
    servicioId?:number;
}