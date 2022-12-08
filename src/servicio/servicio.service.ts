import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandleErrors } from 'src/common/handle-errors';
import { Repository } from 'typeorm';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Servicio } from './entities/servicio.entity';

@Injectable()
export class ServicioService {

  private errors:HandleErrors;
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>
  ){ 
  }
  
  async create(createServicioDto: CreateServicioDto) {
    try {
      console.log(createServicioDto);
      const servicio = this.servicioRepository.create({
        ...createServicioDto
      });
      
      await this.servicioRepository.save( servicio );

      return { createServicioDto };
      
    } catch (error) {
      this.errors.handleDBExceptions(error);
    }
  }

  async findAll() {
    const servicios = await this.servicioRepository.find(
      {'relations':['departamento']}
      )
    return servicios;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicio`;
  }

  async update(id: number, updateServicioDto: UpdateServicioDto) {
    const servicios = await this.servicioRepository.preload({
      id:id,
      ...updateServicioDto
    });

    await this.servicioRepository.save(servicios);
    return servicios;
  }

  remove(id: number) {
    return `This action removes a #${id} servicio`;
  }
}
