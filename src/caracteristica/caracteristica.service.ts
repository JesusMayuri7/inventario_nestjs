import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCaracteristicaDto } from './dto/create-caracteristica.dto';
import { UpdateCaracteristicaDto } from './dto/update-caracteristica.dto';
import { Caracteristica } from './entities/caracteristica.entity';
import { Categoria } from '../categoria/entities/categoria.entity';
import { CategoriaCaracteristica } from '../producto/entities/categoria.caracteristica.entity';
import { CreateCategoriaCaracteristicaDto } from './dto/create-categoria-caracteristica.dto';
import { UpdateCategoriaCaracteristicaDto } from './dto/update-categoria-caracteristica.dto';


@Injectable()
export class CaracteristicaService {
  constructor(
 @InjectRepository(Caracteristica)
  private readonly caracteristicaRepository: Repository<Caracteristica>,
  @InjectRepository(Categoria)
  private readonly categoriaRepository: Repository<Categoria>,
  @InjectRepository(CategoriaCaracteristica)
  private readonly categoriaCaracteristicaRepository: Repository<CategoriaCaracteristica>,
  ){    
  }

  
/*     async create(createCaracteristicaDto: CreateCaracteristicaDto) {
      try {
        const newCaracteristica = new Caracteristica();
        newCaracteristica.desc_caracteristica = createCaracteristicaDto.desc_caracteristica;
        const categoriasIds = createCaracteristicaDto.categoriasIds;
        const categorias = await this.categoriaRepository.findByIds(categoriasIds);
        newCaracteristica.categorias = categorias;
        console.log(newCaracteristica);
        return this.caracteristicaRepository.save(newCaracteristica);        
      } catch (error) {
        this.handleDBExceptions(error);
      }
    } */

    async setCategoria(updateCaracteristicaDto: UpdateCaracteristicaDto) {
      try {
        //const categorias = {id:2, desc_categoria:"TELEFONO"};
        //const newCaracteristica =  await this.caracteristicaRepository.findOneBy({id:updateCaracteristicaDto.id}); 
        //const newCaracteristica1 =  { id: '3', desc_caracteristica:'N° IP' } as Caracteristica; 
  /*       const newCaracteristica =  await this.caracteristicaRepository.findOneBy( 
        //  relations: ['categoria_caracteristica'],
          { id: updateCaracteristicaDto.id } 
           
          ); 
        newCaracteristica.id = updateCaracteristicaDto.id;
        newCaracteristica.desc_caracteristica = updateCaracteristicaDto.desc_caracteristica;
        newCaracteristica.categorias = [{id:
                                         updateCaracteristicaDto.categoria_id,
                                        desc_categoria :'TIPO '} as Categoria]; */

                                        const newCaracteristica =  this.categoriaCaracteristicaRepository.create( 
                                          //  relations: ['categoria_caracteristica'],
                                            //{ id: updateCaracteristicaDto.id } 
                                             
                                            ); 
                                          newCaracteristica.caracteristica_id = updateCaracteristicaDto.id;
                                          newCaracteristica.categoria_id = updateCaracteristicaDto.categoria_id;
                                 

/* 
        newCaracteristica.categoria_caracteristica =
        [{ categoria_id: updateCaracteristicaDto.categoria_id,
           caracteristica_id: updateCaracteristicaDto.id } as CategoriaCaracteristica];  */

        /* let updateCaracteristica = {
          ...newCaracteristica,
          caracteristica_id: 8,
          categoriasIds:[categorias.id]
        }   */
        console.log(newCaracteristica);
        return this.categoriaCaracteristicaRepository.save(newCaracteristica);     


/* 
        const newCaracteristica = this.caracteristicaRepository.findOneBy({id:createCaracteristicaDto.id});        
        const categoriasIds = createCaracteristicaDto.categoriasIds;
        const categorias = await this.categoriaRepository.findByIds(categoriasIds);
        (await newCaracteristica).categorias = categorias;
        //console.log(newCaracteristica);
        return this.caracteristicaRepository.save(newCaracteristica);    */     
      } catch (error) {
        this.handleDBExceptions(error);
      }
    } 

    async createOne(createCaracteristicaDto: CreateCaracteristicaDto) {
      try {
        const newCaracteristica = new Caracteristica();
        newCaracteristica.desc_caracteristica = createCaracteristicaDto.desc_caracteristica;
        return this.caracteristicaRepository.save(newCaracteristica);        
      } catch (error) {
        this.handleDBExceptions(error);
      }
    }
  

  async findAll() {
    const caracteristica = await this.caracteristicaRepository.find({
      //  take: limit,
      //  skip: offset,
            relations: {
          categorias: true,
        }  
      })
      return caracteristica;
  }

  findOne(id: number) {
    return `This action returns a #${id} caracteristica`;
  }

    async update(id: number, updateCaracteristicaDto: UpdateCaracteristicaDto) {

      const caracteristica = await this.caracteristicaRepository.preload({
        id:id,
        ...updateCaracteristicaDto
      });
  
      await this.caracteristicaRepository.save(caracteristica);
      return caracteristica;
    }

  async deleteCaracteristicaOfCategoria(categoria_caracteristica:UpdateCategoriaCaracteristicaDto) {
    console.log('delete',categoria_caracteristica);
    const newCaracteristica =  await this.categoriaCaracteristicaRepository.delete({
      categoria_id: categoria_caracteristica.categoria_id,
      caracteristica_id:categoria_caracteristica.caracteristica_id
    })
    return newCaracteristica;
    
  }

  private handleDBExceptions( error: any ) {

    if ( error.code === '23505' )
      throw new BadRequestException(error.detail);
    
    //this.logger.error(error)
    // console.log(error)
    throw new InternalServerErrorException('Unexpected error, check server logs');

  }
}
