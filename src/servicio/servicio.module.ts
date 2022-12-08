import { Module } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { ServicioController } from './servicio.controller';
import { Servicio } from './entities/servicio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ServicioController],
  providers: [ServicioService],  
  imports: [
    TypeOrmModule.forFeature([ Servicio ]),
    
  ],
  exports:[TypeOrmModule]
})
export class ServicioModule {}
