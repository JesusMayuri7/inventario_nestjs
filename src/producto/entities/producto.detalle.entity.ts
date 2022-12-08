import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoriaCaracteristica } from './categoria.caracteristica.entity';


@Entity({ name: 'producto_detalle' }) // name is name table
export class ProductoDetalle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', {
        select: false 
    })
    categoria_caracteristica_id: number;

    @Column('int', {
        select: false 
    })
    producto_id: number;

    @Column('text', {default: ''})
    valor: string;

    @ManyToOne(
        () => Producto,
        ( producto ) => producto.producto_detalle,
        { eager: false,onDelete: 'CASCADE' }
    )    
    @JoinColumn({ name: 'producto_id', referencedColumnName: 'id' }) // column de esta entidad ProductoDetalle
    producto?: Producto

    @ManyToOne(
        () => CategoriaCaracteristica,
        ( categoriaCaracteristica ) => categoriaCaracteristica.producto_detalle,
        { eager: false, onDelete: 'CASCADE' }
    )
    @JoinColumn({name:'categoria_caracteristica_id'}) /// column de esta entidad ProductoDetalle
    categoriaCaracteristica?: CategoriaCaracteristica 
    
    
}