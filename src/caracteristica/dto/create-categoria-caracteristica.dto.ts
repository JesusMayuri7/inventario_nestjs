import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateCategoriaCaracteristicaDto {
    @PrimaryGeneratedColumn()
    @IsOptional()
    id?:number;

    @IsNumber({})    
    categoria_id?:number;

    @IsNumber({})    
    caracteristica_id?:number;

}