import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

import { Producto } from './entities/producto.entity';
import { ProductoDetalle } from './entities/producto.detalle.entity';
import { Marca } from 'src/marca/entities/marca.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Caracteristica } from 'src/caracteristica/entities/caracteristica.entity';
import { UpdateProductoDetalleDto } from './dto/update-producto-detalle.dto';
import { map } from 'rxjs/operators';


@Injectable()
export class ProductoService {

  constructor(
  @InjectRepository(Producto) private readonly productoRepository: Repository<Producto>,
  @InjectRepository(Categoria) private readonly categoriaRepository: Repository<Categoria>,
  @InjectRepository(ProductoDetalle) private readonly productoDetalleRepository: Repository<ProductoDetalle>,
  ){
    
  }

  async create(createProductoDto: CreateProductoDto) {    
    try {    
      const { producto_detalle = [], ...products}  = createProductoDto;
/*       const newProducto = new Producto();
      newProducto.desc_producto = createProductoDto.desc_producto;
      newProducto.marca_id = createProductoDto.marca_id;
      newProducto.area_id = createProductoDto.area_id;
      newProducto.categoria_id = createProductoDto.categoria_id;
      newProducto.serie = createProductoDto.serie;
      newProducto.modelo = createProductoDto.modelo; */
      const producto = this.productoRepository.create({        
        ...products,
        producto_detalle: producto_detalle.map(
          detalle => this.productoDetalleRepository.create({
            categoria_caracteristica_id: detalle.categoria_caracteristica_id, 
            valor:detalle.valor           
          })
        )
      });
      await this.productoRepository.save( producto);
      return {producto};
     // producto.productoDetalle = createProductoDto.detalle;
     // const productoDetalle = await this.detalleRepository.save(producto);

/*       const detallesIds = createProductoDto.detellaIds;
      const categoriaCaracteristica = await this.detalleRepository.findByIds(detallesIds);
      newProducto.categoriaCaracteristica = categoriaCaracteristica; */
     
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }



  async findAll() {
/*      const products = await this.productoRepository.find({
    relations:['categoriaCaracteristica.caracteristica',
    'categoriaCaracteristica.producto_detalle'
  ]             
    });  */

/*      const products= await this.productoRepository.createQueryBuilder('producto')
     .leftJoinAndSelect('producto.categoriaCaracteristica','cat_car')      
     .leftJoinAndSelect('cat_car.caracteristica','car')  
    .getRawMany(); */

    const products = await this.productoRepository.createQueryBuilder('prod')    
    .leftJoinAndSelect('prod.centro', 'centro')   
    .leftJoinAndSelect('prod.area', 'area')   
    .leftJoinAndSelect('prod.personal', 'per')   
    .leftJoinAndSelect('area.seccion', 'sec')   
    .leftJoinAndSelect('prod.categoria', 'cat')    
    .leftJoinAndSelect('cat.categoria_caracteristica', 'categoria_car')    
    .leftJoinAndSelect('prod.marca', 'mar')    
    .leftJoinAndSelect('prod.grupo', 'grp')    
    //.leftJoinAndSelect('prod.categoriaCaracteristica', 'cat_car')    
    .leftJoinAndSelect('prod.producto_detalle', 'det')            
    .leftJoinAndSelect('det.categoriaCaracteristica', 'cat_car')      
    .leftJoinAndSelect('cat_car.caracteristica', 'car')  
    .orderBy('prod.id', 'DESC')   
    .getMany();



/*     const products= await this.productoRepository.createQueryBuilder('producto')
    .select()
    //.addSelect("producto.modelo","modelo")
    .leftJoin(  // Agregar marca en una sola linea
        cat=> cat     
        .from(Categoria,'cat')   
        ,'categoria','categoria.id = producto.categoria_id')
    .leftJoin(  // Agregar marca en una sola linea
        mar=> mar      
        .from(Marca,'mar')   
        ,'marca','marca.id = producto.marca_id')
        .printSql()
    .getRawMany(); */


/*     const products= this.productoRepository
    .createQueryBuilder('producto')
    .leftJoinAndMapMany(
      'producto.producto_detalle',
      ProductoDetalle,
      'producto_detalle',
      'producto.id=producto_detalle.producto_id',
    )
    .leftJoinAndMapOne(
      'producto_detalle.categoria_caracteristica',
      CategoriaCaracteristica,
      'categoria_caracteristica',
      'producto_detalle.categoria_caracteristica_id=categoria_caracteristica.id',
    )
    .leftJoinAndMapOne(
      'categoria_caracteristica.caracteristica',
      Caracteristica,
      'caracteristica',
      'categoria_caracteristica.caracteristica_id=caracteristica.id',
    )
    .getMany(); */

    return products;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  async updateProducto(id: number, updateProductoDto: UpdateProductoDto) {
    
    const product = await this.productoRepository.preload({
      id:id,
      ...updateProductoDto});

    if(!product) throw new NotFoundException(`Product with id ${id} not found`);

    if(updateProductoDto.categoria_id)
    {
      await this.productoDetalleRepository.delete({producto_id:id });
      const categoria = await this.categoriaRepository.find(
        {where:{id:updateProductoDto.categoria_id},
        relations:["categoria_caracteristica"]
      });
    
      console.log('cara',categoria[0].categoria_caracteristica);
      product.categoriaCaracteristica=categoria[0].categoria_caracteristica;
       /* product.categoriaCaracteristica = categoria[0].categoria_caracteristica.map(
        detalle => {
          console.log(detalle);
           this.productoDetalleRepository.create({
          categoria_caracteristica_id: detalle.categoria_caracteristica_id, 
          valor:detalle.valor          
        })
      }
      ) */
      console.log('categoria',categoria)
    }
    else console.log(' not cat');
    

    await this.productoRepository.save(product);
    
    return product;
  }



  async updateProductoDetalle(updateProductoDetalleDto:UpdateProductoDetalleDto[]) {

    const response = updateProductoDetalleDto.map(item=> {
      this.productoDetalleRepository.update({id: item.id},{valor: item.valor});
    });
    
    return response; 

  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }

  
  private handleDBExceptions( error: any ) {

    if ( error.code === '23505' )
      throw new BadRequestException(error.detail);
    
    //this.logger.error(error)
    // console.log(error)
    throw new InternalServerErrorException('Unexpected error, check server logs');

  }
}



