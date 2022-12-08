import { Module } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoController } from './grupo.controller';
import { Grupo } from './entities/grupo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoProducto } from './entities/grupo_producto.entity';

@Module({
  controllers: [GrupoController],
  providers: [GrupoService],  
  imports: [
    TypeOrmModule.forFeature([ Grupo, GrupoProducto]),
    
  ],
  exports:[TypeOrmModule]
})
export class GrupoModule {}
