import { Area } from "src/area/entities/area.entity";
import { Centro } from "src/centro/entities/centro.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Red } from "src/red/entities/red.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Departamento } from '../../departamento/entities/departamento.entity';


@Entity({ name: 'servicio' }) // name is name table
export class Servicio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        unique: true,
    })
    desc_servicio: string;

    @Column('int',{select:false})
    departamento_id: number;

    @ManyToOne(
        () => Departamento,
        ( departamento ) => departamento.id,
        { cascade: false }
    )
    @JoinColumn({name:'departamento_id'})
    departamento?: Departamento

    @OneToMany(
        () => Area,
        (area) => area.servicio,
        { cascade: false }
    )
    area?: Area[]; 
}

