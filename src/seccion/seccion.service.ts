import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandleErrors } from 'src/common/handle-errors';
import { Repository } from 'typeorm';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';
import { Seccion } from './entities/seccion.entity';

@Injectable()
export class SeccionService {

  private errors:HandleErrors;
  constructor(
    @InjectRepository(Seccion)
    private readonly seccionRepository: Repository<Seccion>
  ){
    
  }

  async create(createSeccionDto: CreateSeccionDto) {
    try {
      console.log(createSeccionDto);
      const marca = this.seccionRepository.create({
        ...createSeccionDto
      });
      
      await this.seccionRepository.save( marca );

      return { createSeccionDto };
      
    } catch (error) {
      this.errors.handleDBExceptions(error);
    }
  }

  async findAll() {
       const secciones = await this.seccionRepository.find({
      
    })
    return secciones;
  }

  findOne(id: number) {
    return `This action returns a #${id} seccion`;
  }

  async update(id: number, updateSeccionDto: UpdateSeccionDto) {
    const red = await this.seccionRepository.preload({
      id:id,
      ...updateSeccionDto
    });

    await this.seccionRepository.save(red);
    return red;
  }

  remove(id: number) {
    return `This action removes a #${id} seccion`;
  }
}
