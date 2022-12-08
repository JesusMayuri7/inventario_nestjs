import { PartialType } from "@nestjs/mapped-types";
import { CreateGrupoProductoDto } from "./create-grupo.producto";

export class UpdateGrupoProductoDto extends PartialType(CreateGrupoProductoDto) {}