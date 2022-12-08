import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HandleErrors } from 'src/common/handle-errors';
import { Producto } from 'src/producto/entities/producto.entity';
import { Repository } from 'typeorm';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { CreateGrupoProductoDto } from './dto/create-grupo.producto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { UpdateGrupoProductoDto } from './dto/update-grupo.producto';
import { Grupo } from './entities/grupo.entity';
import { GrupoProducto } from './entities/grupo_producto.entity';

@Injectable()
export class GrupoService {

  private errors:HandleErrors;
  constructor(
    @InjectRepository(Grupo)
    private readonly grupoRepository: Repository<Grupo>,
    @InjectRepository(GrupoProducto)
    private readonly grupoProductoRepository: Repository<GrupoProducto>
  ){ 
  }
  
  async create(createGrupoDto: CreateGrupoDto) {
    try {
      console.log(createGrupoDto);
      const grupo= this.grupoRepository.create({
        ...createGrupoDto
      });
      
      await this.grupoRepository.save( grupo);

      return { createGrupoDto };
      
    } catch (error) {
      this.errors.handleDBExceptions(error);
    }
  }

  async findAll() {
    const grupos = await this.grupoRepository.find(
      {'relations':['producto']}
      )
    return grupos;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicio`;
  }

  async update(id: number, updateGrupoDto: UpdateGrupoDto) {
    const grupos = await this.grupoRepository.preload({
      id:id,
      ...updateGrupoDto
    });

    await this.grupoRepository.save(grupos);
    return grupos;
  }

  async setGrupo(updateGrupoProductoDto: CreateGrupoProductoDto) {   
    console.log('set grupo find'); 
    console.log(updateGrupoProductoDto); 
    
    const newGrupoProducto =  this.grupoProductoRepository.create(); 
    newGrupoProducto.grupo_id = updateGrupoProductoDto.grupo_id;
    newGrupoProducto.producto_id = updateGrupoProductoDto.producto_id;
    const response = await this.grupoProductoRepository.save(newGrupoProducto);

    const producto = this.grupoProductoRepository.find({
    'relations':['producto'],
    where: {
      id: response.id,      
  },
  });



    return producto;
   
   // const user = await this.grupoRepository.save(grupo);  
  }

  async removeProductoAndGrupo(updateGrupoProductoDto:UpdateGrupoProductoDto) {
    await this.grupoProductoRepository.delete({ grupo_id: 1,producto_id:39 });
  }

  async reporteGrupoProducto(){
        const reporteGrupo= await this.grupoRepository.createQueryBuilder('grupo')
        .leftJoinAndSelect('grupo.producto','gp')        
    .getRawMany();
    return reporteGrupo.filter((itemd)=>itemd.gp_id != null );
  }
}
