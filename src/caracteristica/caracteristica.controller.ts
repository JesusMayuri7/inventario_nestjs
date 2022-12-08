import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CaracteristicaService } from './caracteristica.service';
import { CreateCaracteristicaDto } from './dto/create-caracteristica.dto';
import { CreateCategoriaCaracteristicaDto } from './dto/create-categoria-caracteristica.dto';
import { UpdateCaracteristicaDto } from './dto/update-caracteristica.dto';
import { UpdateCategoriaCaracteristicaDto } from './dto/update-categoria-caracteristica.dto';

@Controller('caracteristica')
export class CaracteristicaController {
  constructor(private readonly caracteristicaService: CaracteristicaService) {}

/*   @Post()
  create(@Body() createCaracteristicaDto: CreateCaracteristicaDto) {
    return this.caracteristicaService.create(createCaracteristicaDto);
  } */

  @Post()
  createOne(@Body() createCaracteristicaDto: CreateCaracteristicaDto) {
    return this.caracteristicaService.createOne(createCaracteristicaDto);
  }

  @Post('setCategoria')
  setCategoria(@Body() updateCaracteristicaDto: UpdateCaracteristicaDto) {
    return this.caracteristicaService.setCategoria(updateCaracteristicaDto);
  }

  @Get()
  findAll() {
    return this.caracteristicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caracteristicaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaracteristicaDto: UpdateCaracteristicaDto) {
    return this.caracteristicaService.update(+id, updateCaracteristicaDto);
  }

  @Put('')
  deleteCaracteristicaOfCategoria(@Body() categoria_caracteristica: UpdateCategoriaCaracteristicaDto) {
    console.log('controller',categoria_caracteristica);
    return this.caracteristicaService.deleteCaracteristicaOfCategoria(categoria_caracteristica);
  }
}
