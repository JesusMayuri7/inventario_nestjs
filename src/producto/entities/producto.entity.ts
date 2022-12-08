import { Area } from "src/area/entities/area.entity";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Centro } from "src/centro/entities/centro.entity";
import { Grupo } from "src/grupo/entities/grupo.entity";
import { Marca } from "src/marca/entities/marca.entity";
import { Personal } from "src/personal/entities/personal.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoriaCaracteristica } from "./categoria.caracteristica.entity";
import { ProductoDetalle } from "./producto.detalle.entity";

@Entity({ name: 'producto' })
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    desc_producto: string;
    
    @Column('int')
    categoria_id: number;

    @Column('int',{select:false})
    area_id: number;

    @Column('int',{select:false})
    centro_id: number;

    @Column('int',{select:false})
    marca_id: number;

    @Column('int',{select:false})
    personal_id: number;

    @Column('text', {
    })
    modelo: string;

    @Column('text', )
    codigo_patrimonial: string;

    @Column('text', {
    })
    serie: string;

    @Column('text', {
    })
    estado: string;

    @Column('text', {
    })
    observaciones: string;

    @ManyToOne(
        () => Area,
        ( area ) => area.producto,
        { cascade: false,eager: true }
    )
    @JoinColumn({name:'area_id'})
    area?: Area

    @ManyToOne(
        () => Marca,
        ( marca ) => marca.producto,
        { cascade: false,eager: true }
    )
    @JoinColumn({name:'marca_id'})
    marca?: Marca

    @ManyToMany(()=> CategoriaCaracteristica,
    (productoDetalle) => productoDetalle.producto,
    { cascade: true }
    )
    @JoinTable({
        name: 'producto_detalle',
        joinColumn: {
            name: 'producto_id'            
        },
        inverseJoinColumn: {
            name: 'categoria_caracteristica_id'
        }
      
    })
    categoriaCaracteristica?: CategoriaCaracteristica[];

    @OneToMany(
        () => ProductoDetalle,
        (detalle) => detalle.producto,   
        { cascade: true}   
    )  
    @JoinColumn()      
    producto_detalle?:ProductoDetalle[]

    @ManyToOne(
        () => Categoria,
        ( categoria ) => categoria.id,
        { cascade: false,eager: true }
    )
    @JoinColumn({name:'categoria_id'})
    categoria?: Categoria

    @ManyToMany(()=> Grupo,
    (grupo) => grupo.producto,
    )
    @JoinTable({
        name: 'grupo_producto',
        joinColumn: {
            name: 'producto_id'            
        },
        inverseJoinColumn: {
            name: 'grupo_id'
        }
      
    })
    grupo?: Grupo[];

    @ManyToOne(
        () => Centro,
        ( centro ) => centro.producto,
        { cascade: false,eager: true }
    )
    @JoinColumn({name:'centro_id'})
    centro?: Centro

    @ManyToOne(
        () => Personal,
        ( personal ) => personal.producto,
        { cascade: false }
    )
    @JoinColumn({name:'personal_id'})
    personal?: Personal


}
