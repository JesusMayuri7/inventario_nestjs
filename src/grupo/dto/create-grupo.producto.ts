import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateGrupoProductoDto {
    @IsNumber()
    @IsOptional()
    id?:number;

    @IsNumber()    
    @IsPositive()
    grupo_id?:number;

    @IsNumber()    
    @IsPositive()
    producto_id?:number;
}