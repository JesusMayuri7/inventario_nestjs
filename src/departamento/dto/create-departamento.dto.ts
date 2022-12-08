import { IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateDepartamentoDto {
    @IsNumber()
    @IsOptional()
    id?:number;

    @IsString()
    desc_departamento:string;

    @IsInt()
    @IsPositive()            
    red_id:number;


}
