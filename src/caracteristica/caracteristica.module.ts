import { Module } from '@nestjs/common';
import { CaracteristicaService } from './caracteristica.service';
import { CaracteristicaController } from './caracteristica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Caracteristica } from './entities/caracteristica.entity';
import { Categoria } from '../categoria/entities/categoria.entity';
import { CategoriaModule } from '../categoria/categoria.module';
import { CategoriaCaracteristica } from 'src/producto/entities/categoria.caracteristica.entity';
import { ProductoModule } from '../producto/producto.module';

@Module({
  controllers: [CaracteristicaController],
  providers: [CaracteristicaService],
  imports:[ TypeOrmModule.forFeature([ Caracteristica,CategoriaCaracteristica ]),
  CategoriaModule],
  exports:[TypeOrmModule]
})
export class CaracteristicaModule {}
