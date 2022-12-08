import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMarcaDto {
    @IsNumber()
    @IsOptional()
    id?:number;

    @IsString()
    desc_marca:string;
}
