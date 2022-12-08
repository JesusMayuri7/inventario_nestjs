import { Module } from '@nestjs/common';
import { CentroService } from './centro.service';
import { CentroController } from './centro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Centro } from './entities/centro.entity';

@Module({
  controllers: [CentroController],
  providers: [CentroService],
  imports: [
    TypeOrmModule.forFeature([ Centro ]),
    
  ],
  exports:[TypeOrmModule]
})
export class CentroModule {}
