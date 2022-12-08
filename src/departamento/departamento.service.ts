import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandleErrors } from 'src/common/handle-errors';
import { Repository } from 'typeorm';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Departamento } from './entities/departamento.entity';

@Injectable()
export class DepartamentoService {

  private errors:HandleErrors;
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>
  ){ 
  }
  async create(createDepartamentoDto: CreateDepartamentoDto) {
    try {
      console.log(createDepartamentoDto);
      const dpto = this.departamentoRepository.create({
        ...createDepartamentoDto
      });
      
      await this.departamentoRepository.save( dpto );

      return { createDepartamentoDto };
      
    } catch (error) {
      this.errors.handleDBExceptions(error);
    }
  }

  async findAll() {
    const dptos = await this.departamentoRepository.find(
      {'relations':['red']}
      )
    return dptos;
  }

  findOne(id: number) {
    return `This action returns a #${id} departamento`;
  }

  async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    const red = await this.departamentoRepository.preload({
      id:id,
      ...updateDepartamentoDto
    });

    await this.departamentoRepository.save(red);
    return red;
  }

  remove(id: number) {
    return `This action removes a #${id} departamento`;
  }
}
