//import { PartialType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaCaracteristicaDto } from './create-categoria-caracteristica.dto';

export class UpdateCategoriaCaracteristicaDto extends PartialType(CreateCategoriaCaracteristicaDto) {}