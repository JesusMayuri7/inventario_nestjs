import { Centro } from "src/centro/entities/centro.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Departamento } from '../../departamento/entities/departamento.entity';

@Entity({ name: 'red' }) // name is name table
export class Red {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        unique: true,
    })
    desc_red: string;

     @OneToMany(
        () => Departamento,
        (departamento) => departamento.red,
        { cascade: false }
    )
    departamento?: Departamento[]; 
}
