

    import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePersonalDto {
    @IsNumber()
    @IsOptional()
    id?:number;

    @IsString()
    apellidos:string;

    @IsString()
    nombres:string;

    @IsString()
    dni:string;

    @IsString()
    @IsOptional()
    codigo_planilla?:string;
}

