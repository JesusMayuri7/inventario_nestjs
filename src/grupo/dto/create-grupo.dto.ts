import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateGrupoDto {
    @IsNumber()
    @IsOptional()
    id?:number;

    @IsString()
    desc_grupo:string;

    @IsOptional()    
    producto?:[];


}
