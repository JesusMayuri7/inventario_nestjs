import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {

  constructor(    @InjectRepository(Categoria)
  private readonly categoriaRepository: Repository<Categoria>,){
  }
  
  async create(createCategoriaDto: CreateCategoriaDto) {
    try {
      console.log(createCategoriaDto);
      const area = this.categoriaRepository.create({
        ...createCategoriaDto
      });
      
      await this.categoriaRepository.save( area );

      return { createCategoriaDto };
      
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.categoriaRepository.find({
      relations:['caracteristica.categoria_caracteristica']}
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }


    async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {

      const marca = await this.categoriaRepository.preload({
        id:id,
        ...updateCategoriaDto
      });
  
      await this.categoriaRepository.save(marca);
      return marca;
    }


  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }

  private handleDBExceptions( error: any ) {

    if ( error.code === '23505' )
      throw new BadRequestException(error.detail);
    
    //this.logger.error(error)
    // console.log(error)
    throw new InternalServerErrorException('Unexpected error, check server logs');

  }
}
