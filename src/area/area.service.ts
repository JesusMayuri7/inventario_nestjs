import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Area } from './entities/area.entity';

@Injectable()
export class AreaService {

  constructor(    
    @InjectRepository(Area)
  private readonly areaRepository: Repository<Area>,){

  }

  async create(createAreaDto: CreateAreaDto) {
    try {
      console.log(createAreaDto);
      const area = this.areaRepository.create({
        ...createAreaDto
      });
      
      await this.areaRepository.save( area );

      return { createAreaDto };
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.areaRepository.find(
       {
        "relations":['servicio','seccion']
      }
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} area`;
  }

  async update(id: number, updateAreaDto: UpdateAreaDto) {
    console.log(updateAreaDto);
    const area = await this.areaRepository.preload({
      id:id,
      ...updateAreaDto
    });

    await this.areaRepository.save(area);
    return area;
  }

  remove(id: number) {
    return `This action removes a #${id} centro`;
  }



  private handleDBExceptions( error: any ) {

    if ( error.code === '23505' )
      throw new BadRequestException(error.detail);
    
    //this.logger.error(error)
    // console.log(error)
    throw new InternalServerErrorException('Unexpected error, check server logs');

  }
}
