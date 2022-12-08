import { Module } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { SeccionController } from './seccion.controller';
import { Seccion } from './entities/seccion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SeccionController],
  providers: [SeccionService],
  imports: [
    TypeOrmModule.forFeature([ Seccion ]),
    
  ],
  exports:[TypeOrmModule]
})
export class SeccionModule {}
