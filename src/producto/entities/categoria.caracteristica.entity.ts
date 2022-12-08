import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductoDetalle } from "./producto.detalle.entity";
import { Caracteristica } from '../../caracteristica/entities/caracteristica.entity';
import { Categoria } from "src/categoria/entities/categoria.entity";


@Entity({ name: 'categoria_caracteristica' }) // name is name table
export class CategoriaCaracteristica {
    @PrimaryGeneratedColumn({})
    id: number;

    @Column('int', {
         select: false 
    })
    categoria_id: number;

    @Column('int', {
        select: false 
    })
    caracteristica_id: number;

    @ManyToMany(
        ()=> Producto,
    (producto) => producto.categoriaCaracteristica,
    )
    producto?: Producto[];

    @OneToMany(
        () => ProductoDetalle,
        (detalle) => detalle.categoriaCaracteristica,
        {cascade:true}
    )
    producto_detalle?:ProductoDetalle[]

    @ManyToOne(
        () => Caracteristica,
        ( caracteristica ) => caracteristica.categoria_caracteristica,
        { eager: false }
    )    
    @JoinColumn({name:'caracteristica_id'}) // column de esta entidad ProductoDetalle
    caracteristica?: Caracteristica

    @ManyToOne(
        () => Categoria,
        ( categoria ) => categoria.caracteristica,
        { cascade: false,eager: false }
    )
    @JoinColumn({name:'categoria_id'}) /// column de esta entidad ProductoDetalle
    categoria?: CategoriaCaracteristica 

}