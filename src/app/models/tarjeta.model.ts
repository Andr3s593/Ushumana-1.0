export interface HistorialTarjetaModel{
    _id:number;
    nombres: string;    
    apellidos:string;
    email:string;
    tarjeta:string;
    numerotarjeta:number;    
    fechacaducidad:Date;    
}export interface CreateHistorialTarjetaDto extends Omit<HistorialTarjetaModel, '_id'> {

}
export interface UpdateHistorialTarjetaDto extends Partial<HistorialTarjetaModel> {
  
}
