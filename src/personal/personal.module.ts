import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { Personal } from './entities/personal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [PersonalController],
  providers: [PersonalService],
  imports: [
    TypeOrmModule.forFeature([ Personal ]),
    
  ],
  exports:[TypeOrmModule]
})
export class PersonalModule {}
