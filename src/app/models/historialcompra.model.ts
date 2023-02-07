export interface HistorialCompraModel{
    _id:number;
    imagen: string;
    nombreplatillo:string;
    cantidad:number;
    precioplatillo:number;
}export interface CreateHistorialCompraDto extends Omit<HistorialCompraModel, '_id'> {

}
export interface UpdateHistorialCompraDto extends Partial<HistorialCompraModel> {
  
}
