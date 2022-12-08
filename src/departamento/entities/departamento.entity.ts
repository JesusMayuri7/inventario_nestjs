import { Centro } from "src/centro/entities/centro.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Red } from "src/red/entities/red.entity";
import { Servicio } from "src/servicio/entities/servicio.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'departamento' }) // name is name table
export class Departamento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        unique: true,
    })
    desc_departamento: string;

    @Column('int',{select:false})
    red_id: number;

    @ManyToOne(
        () => Red,
        ( red ) => red.departamento,
        { cascade: false }
    )
    @JoinColumn({name:'red_id'})
    red?: Red

    @OneToMany(
        () => Servicio,
        (servicio) => servicio.departamento,
        { cascade: false }
    )
    servicio?: Servicio[]; 
}

