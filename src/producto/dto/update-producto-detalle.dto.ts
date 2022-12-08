import { PartialType } from "@nestjs/mapped-types";
//import { PartialType } from '@nestjs/swagger';
import { CreateProductoDetalleDto } from "./create-producto-detalle.dto";

export class UpdateProductoDetalleDto extends PartialType(CreateProductoDetalleDto) {}