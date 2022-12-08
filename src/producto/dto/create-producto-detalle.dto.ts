import { IsNumber, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";


export class CreateProductoDetalleDto {

    @PrimaryGeneratedColumn()
    id?:number;
  
    @IsNumber()   
    categoria_caracteristica_id:number;

    @IsString()
    valor:string;
}