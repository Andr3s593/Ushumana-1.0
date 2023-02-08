export interface HistorialReservaModel{
    _id:number;
    imagen: string;
    nombres: string;
    apellidos:string;
    numeroadultos:number;
    numeroninos:number;
    fechadereserva:Date;    
    mascotas:number;
    descripcion:number;
}export interface CreateHistorialReservaDto extends Omit<HistorialReservaModel, '_id'> {

}
export interface UpdateHistorialReservaDto extends Partial<HistorialReservaModel> {
  
}
