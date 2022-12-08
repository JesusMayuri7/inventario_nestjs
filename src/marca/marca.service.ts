import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';


@Injectable()
export class MarcaService {
  constructor(    
  @InjectRepository(Marca)
  private readonly marcaRepository: Repository<Marca>){

  }

  async create(createMarcaDto: CreateMarcaDto) {
    try {
      console.log(createMarcaDto);
      const marca = this.marcaRepository.create({
        ...createMarcaDto
      });
      
      await this.marcaRepository.save( marca );

      return { createMarcaDto };
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    const marcas = await this.marcaRepository.find({
    //  take: limit,
    //  skip: offset,
/*        relations: {
        area: true,
      } */
    })
    return marcas;
  }

  findOne(id: number) {
    return `This action returns a #${id} marca`;
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {

    const marca = await this.marcaRepository.preload({
      id:id,
      ...updateMarcaDto
    });

    await this.marcaRepository.save(marca);
    return marca;
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }

  private handleDBExceptions( error: any ) {

    if ( error.code === '23505' )
      throw new BadRequestException(error.detail);
    
    //this.logger.error(error)
    // console.log(error)
    throw new InternalServerErrorException('Unexpected error, check server logs');

  }
}
