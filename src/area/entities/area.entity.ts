import { Producto } from "src/producto/entities/producto.entity";
import { Seccion } from "src/seccion/entities/seccion.entity";
import { Servicio } from "src/servicio/entities/servicio.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'area' }) // name is name table
export class Area {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        unique: true,
    })
    desc_area: string;

    @Column('int')
    servicio_id: number;

    @Column('int')
    seccion_id: number;

    @OneToMany(
        () => Producto,
        (producto) => producto.area,
        { cascade: false }
    )
    producto?: Producto[];

    @ManyToOne(
        () => Servicio,
        ( servicio ) => servicio.id,
        { cascade: false }
    )
    @JoinColumn({name:'servicio_id'})
    servicio?: Servicio

    @ManyToOne(
        () => Seccion,
        ( seccion ) => seccion.area,
        { cascade: false }
    )
    @JoinColumn({name:'seccion_id'})
    seccion?: Seccion
}
