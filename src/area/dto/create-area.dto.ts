import { IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateAreaDto {
    @IsNumber()
    @IsOptional()
    id?:number;

    @IsString()
    desc_area:string;

    @IsInt()
    @IsPositive()            
    servicio_id:number;

    @IsInt()
    @IsPositive()            
    seccion_id:number;
    


}
