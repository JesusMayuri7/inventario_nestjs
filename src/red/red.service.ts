import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandleErrors } from 'src/common/handle-errors';
import { Repository } from 'typeorm';
import { CreateRedDto } from './dto/create-red.dto';
import { UpdateRedDto } from './dto/update-red.dto';
import { Red } from './entities/red.entity';

@Injectable()
export class RedService {
   private errors:HandleErrors;

  constructor(    
    @InjectRepository(Red)
    private readonly redRepository: Repository<Red>){
  
    }

  async create(createRedDto: CreateRedDto) {
    try {
      console.log(createRedDto);
      const red = this.redRepository.create({
        ...createRedDto
      });
      
      await this.redRepository.save( red );

      return { createRedDto };
      
    } catch (error) {
      this.errors.handleDBExceptions(error);
    }
  }

  async findAll() {
    const redes = await this.redRepository.find({})
      return redes;
  }

  async findOrganizacion() {
    const organizacion= await this.redRepository.createQueryBuilder('red')     
    .leftJoinAndSelect('red.departamento','dpto')      
    .leftJoinAndSelect('dpto.servicio','serv')   
    .leftJoinAndSelect('serv.area','area')   
    .leftJoinAndSelect('area.seccion','sec')   
    .getRawMany();


    return organizacion;
  }

  findOne(id: number) {
    return `This action returns a #${id} red`;
  }

  async update(id: number, updateRedDto: UpdateRedDto) {
    const red = await this.redRepository.preload({
      id:id,
      ...updateRedDto
    });

    await this.redRepository.save(red);
    return red;
  }

  remove(id: number) {
    return `This action removes a #${id} red`;
  }
}
