import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'grupo_producto' }) // name is name table
export class GrupoProducto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    grupo_id: number;

    @Column('int')
    producto_id: number;

    @ManyToOne(
        () => Producto,
        ( producto ) => producto.grupo,
        { eager: false }
    )    
    @JoinColumn({ name: 'producto_id', referencedColumnName: 'id' }) // column de esta entidad ProductoDetalle
    producto?: Producto



}