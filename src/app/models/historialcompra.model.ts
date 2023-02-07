export interface HistorialCompraModel{
    _id:number;
    nombreplatillo:string;
    cantidad:string;
    precioplatillo:string;
}export interface CreateHistorialCompraDto extends Omit<HistorialCompraModel, '_id'> {

}
export interface UpdateHistorialCompraDto extends Partial<HistorialCompraModel> {
  
}
