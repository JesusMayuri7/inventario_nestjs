import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSeccionDto {
    @IsNumber()
    @IsOptional()
    id?:number;

    @IsString()
    desc_seccion:string;
}
