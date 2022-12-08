import { Module } from '@nestjs/common';
import { RedService } from './red.service';
import { RedController } from './red.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Red } from './entities/red.entity';

@Module({
  controllers: [RedController],
  providers: [RedService],
  imports: [
    TypeOrmModule.forFeature([ Red ]),
    
  ],
  exports:[TypeOrmModule]
})
export class RedModule {}
