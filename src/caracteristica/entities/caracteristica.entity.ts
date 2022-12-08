import { CategoriaCaracteristica } from "src/producto/entities/categoria.caracteristica.entity";
import { ProductoDetalle } from "src/producto/entities/producto.detalle.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'caracteristica' }) // name is name table
export class Caracteristica {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        unique: true,
    })
    desc_caracteristica: string;

    @ManyToMany(
        ()=> Categoria,
    (categorias) => categorias.caracteristica,
    )
    categorias?: Categoria[];

    @OneToMany(
        () => CategoriaCaracteristica,
        (catCarac) => catCarac.caracteristica,
        {cascade:true}
    )       
    categoria_caracteristica?:CategoriaCaracteristica[]



}
