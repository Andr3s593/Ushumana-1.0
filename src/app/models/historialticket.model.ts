export interface HistorialTicketModel{
    _id:number;
    imagen: string;
    numeroadultos: number;
    numeroninos:number;
    numeroterceraedad:number;
    numerdiscapacitados:number;
    precio:number;
}export interface CreateHistorialTicketDto extends Omit<HistorialTicketModel, '_id'> {

}
export interface UpdateHistorialTicketDto extends Partial<HistorialTicketModel> {
  
}
