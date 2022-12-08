import { IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateCentroDto {
    @IsNumber()
    @IsOptional()
    id?:number;

    @IsString()
    desc_marca:string;

}
