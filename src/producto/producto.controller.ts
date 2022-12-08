import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { UpdateProductoDetalleDto } from './dto/update-producto-detalle.dto';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    console.log(createProductoDto);
    return this.productoService.create(createProductoDto);
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(+id);
  }

  @Patch(':id')
  updateProducto(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    console.log(updateProductoDto);
    return this.productoService.updateProducto(+id, updateProductoDto);
  }

  @Post('detalle')
  updateProductoDetalle(@Body() updateProductoDetalleDto: UpdateProductoDetalleDto[]) {
    console.log(updateProductoDetalleDto);
    return this.productoService.updateProductoDetalle(updateProductoDetalleDto);
  }

  @Post('setgrupo')
  updateSetGrupo(@Body() updateProductoDetalleDto: UpdateProductoDetalleDto[]) {
    console.log(updateProductoDetalleDto);
    return this.productoService.updateProductoDetalle(updateProductoDetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
