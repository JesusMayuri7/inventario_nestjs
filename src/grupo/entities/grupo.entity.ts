import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'grupo' }) // name is name table
export class Grupo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        unique: true,
    })
    desc_grupo: string;

/*     @ManyToOne(
        () => Departamento,
        ( departamento ) => departamento.id,
        { cascade: false }
    )
    @JoinColumn({name:'departamento_id'})
    departamento?: Departamento
 */
/*     @OneToMany(
        () => Departamento,
        (departamento) => departamento.servicio,
        { cascade: false }
    )
    producto?: Producto[]; */

    @ManyToMany(()=> Producto,
    (producto) => producto.grupo,
    { cascade: true }
    )
    @JoinTable({
        name: 'grupo_producto',
        joinColumn: {
            name: 'grupo_id'            
        },
        inverseJoinColumn: {
            name: 'producto_id'
        }      
    })
    producto?: Producto[];
}

