import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandleErrors } from 'src/common/handle-errors';
import { Repository } from 'typeorm';
import { CreateCentroDto } from './dto/create-centro.dto';
import { UpdateCentroDto } from './dto/update-centro.dto';
import { Centro } from './entities/centro.entity';

@Injectable()
export class CentroService {
  private errors:HandleErrors;
  constructor(
    @InjectRepository(Centro)
    private readonly centroRepository: Repository<Centro>
  ){
    
  }

  async create(createCentroDto: CreateCentroDto) {
    try {
      console.log(createCentroDto);
      const marca = this.centroRepository.create({
        ...createCentroDto
      });
      
      await this.centroRepository.save( marca );

      return { createCentroDto };
      
    } catch (error) {
      this.errors.handleDBExceptions(error);
    }
  }

  async findAll() {
    const centros = await this.centroRepository.find()
    return centros;
  }

  findOne(id: number) {
    return `This action returns a #${id} centro`;
  }

  async update(id: number, updateCentroDto: UpdateCentroDto) {
    const red = await this.centroRepository.preload({
      id:id,
      ...updateCentroDto
    });

    await this.centroRepository.save(red);
    return red;
  }

  remove(id: number) {
    return `This action removes a #${id} centro`;
  }
}
