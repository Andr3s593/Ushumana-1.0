import { UsuarioModel } from './usuario.model';
export interface TicketModel {
    id: number;
    precio: number;
    servicio: string;
    detalles: string;
    //qr:BigInteger;//En caso de querer implementar un qr//
}
export interface TicketUsuarioModel extends TicketModel {
    usuarios: UsuarioModel;
}
export interface CreateTicketUsuarioModel extends Omit<TicketModel, 'id' | 'usuarios'> {
    
}
export interface UpdateTicketUsuarioModel extends Partial<TicketModel> {
    
}