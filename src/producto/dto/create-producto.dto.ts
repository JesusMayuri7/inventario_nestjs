import { ProductoDetalle } from '../entities/producto.detalle.entity';
import { IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import { CreateProductoDetalleDto } from './create-producto-detalle.dto';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateProductoDto {

        @PrimaryGeneratedColumn()        
        id?:number;

        @IsString()
        @MinLength(1)
        desc_producto:string;

        @IsInt()
        @IsPositive()            
        categoria_id:number;

        @IsInt()
        @IsPositive()            
        area_id:number;

        @IsInt()
        @IsPositive()            
        centro_id:number;

        @IsInt()
        @IsPositive()            
        personal_id:number;

        @IsInt()
        @IsPositive()            
        marca_id:number;
    
        @IsString()
        @IsOptional()
        modelo?:string;

        @IsString()
        @IsOptional()
        codigo_patrimonial?:string;

        @IsString()
        @IsOptional()
        serie?:string;

        @IsString()
        @IsOptional()
        estado?:string;

        @IsString()
        @IsOptional()
        observaciones?:string;
       
        //@ValidateNested({ each: true })        
        @IsOptional()
        @Type(() => CreateProductoDetalleDto)
        producto_detalle?:CreateProductoDetalleDto[];
    }
