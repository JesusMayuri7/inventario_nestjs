import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateCaracteristicaDto {
    @PrimaryGeneratedColumn()
    @IsOptional()
    id?:number;

    @IsString()    
    desc_caracteristica:string;

    @IsNumber({},{each: true})
    @IsOptional()
    categoriasIds?:number[]

    @IsNumber({})
    @IsOptional()
    categoria_id?:number;

}
