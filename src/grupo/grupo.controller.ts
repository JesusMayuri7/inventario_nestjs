import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { CreateGrupoProductoDto } from './dto/create-grupo.producto';
import { UpdateGrupoProductoDto } from './dto/update-grupo.producto';

@Controller('grupo')
export class GrupoController {
  constructor(private readonly grupoService: GrupoService) {}

  @Post()
  create(@Body() createGrupoDto: CreateGrupoDto) {
    console.log('crear');
    return this.grupoService.create(createGrupoDto);
  }

  @Post('setgrupo')
  setGrupo(@Body() createGrupoProductoDto: CreateGrupoProductoDto) {
    console.log('set grupo');
    return this.grupoService.setGrupo(createGrupoProductoDto);
  }

  @Get()
  findAll() {
    console.log('finAll');
    return this.grupoService.findAll();
  }

  @Get('reporte')
  findReporteGrupo(){
    return this.grupoService.reporteGrupoProducto();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grupoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrupoDto: UpdateGrupoDto) {
    console.log('update');
    return this.grupoService.update(+id, updateGrupoDto);
  }

  @Delete('')
  remove(@Body() updateGrupoProductoDto:UpdateGrupoProductoDto) {
    return this.grupoService.removeProductoAndGrupo(updateGrupoProductoDto);
  }
}
