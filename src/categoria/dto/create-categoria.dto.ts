import { IsNumber, IsOptional, IsString } from "class-validator";
import { CategoriaCaracteristica } from "src/producto/entities/categoria.caracteristica.entity";

export class CreateCategoriaDto {
    @IsNumber()
    @IsOptional()
    id?:number;

    @IsString()
    desc_categoria:string;

    @IsOptional()
    categoria_caracteristica?:CategoriaCaracteristica[]
}
