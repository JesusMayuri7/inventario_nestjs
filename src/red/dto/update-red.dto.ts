import { PartialType } from '@nestjs/swagger';
import { CreateRedDto } from './create-red.dto';

export class UpdateRedDto extends PartialType(CreateRedDto) {}
