import { IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateServicioDto {
    @IsNumber()
    @IsOptional()
    id?:number;

    @IsString()
    desc_servicio:string;

    @IsInt()
    @IsPositive()            
    departamento_id:number;
}
