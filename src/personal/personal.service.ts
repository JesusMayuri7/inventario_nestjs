import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandleErrors } from 'src/common/handle-errors';
import { Repository } from 'typeorm';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { Personal } from './entities/personal.entity';

@Injectable()
export class PersonalService {
  private errors:HandleErrors;
  constructor(
    @InjectRepository(Personal)
    private readonly personalRepository: Repository<Personal>
  ){
    
  }

  async create(createPersonalDto: CreatePersonalDto) {
    try {
      console.log(createPersonalDto);
      const personal = this.personalRepository.create({
        ...createPersonalDto
      });
      
      await this.personalRepository.save( personal );

      return { createPersonalDto };
      
    } catch (error) {
     
    }
  }

  async findAll() {
    const personal = await this.personalRepository.find()
    return personal;
  }

  findOne(id: number) {
    return `This action returns a #${id} personal`;
  }

  async update(id: number, updatePersonalDto: UpdatePersonalDto) {
        const personal = await this.personalRepository.preload({
      id:id,
      ...updatePersonalDto
    });

    await this.personalRepository.save(personal);
    return personal;
  }

  remove(id: number) {
    return `This action removes a #${id} personal`;
  }
}
