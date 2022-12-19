import { UsuarioModel } from './usuario.model';
export interface TicketModel {
    id_Ticket:number;    
    precio:number;
    servicio:string;    
    detalles:string;
    //qr:BigInteger;//En caso de querer implementar un qr//
}
export interface TicketUsuarioModel extends TicketModel{    
    usuarios:UsuarioModel;
}