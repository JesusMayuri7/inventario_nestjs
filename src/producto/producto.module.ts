import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { Producto } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaCaracteristica } from './entities/categoria.caracteristica.entity';
import { ProductoDetalle } from './entities/producto.detalle.entity';
import { MarcaModule } from '../marca/marca.module';
import { CaracteristicaModule } from '../caracteristica/caracteristica.module';
import { CategoriaModule } from 'src/categoria/categoria.module';

@Module({
  controllers: [ProductoController],
  providers: [ProductoService],
  imports: [
    TypeOrmModule.forFeature([ Producto,CategoriaCaracteristica ,ProductoDetalle])
    ,MarcaModule,CaracteristicaModule,CategoriaModule
  ],
  exports:[TypeOrmModule]
})
export class ProductoModule {}
