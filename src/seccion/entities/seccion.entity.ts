

import { Area } from "src/area/entities/area.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Red } from "src/red/entities/red.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Departamento } from '../../departamento/entities/departamento.entity';

@Entity({ name: 'seccion' }) // name is name table
export class Seccion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        unique: true,
    })
    desc_seccion: string;

     @OneToMany(
        () => Area,
        (area) => area.seccion,
        { cascade: false }
    )
    area?: Area[];
}
