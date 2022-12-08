import { Producto } from "src/producto/entities/producto.entity";
import { Red } from "src/red/entities/red.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Departamento } from '../../departamento/entities/departamento.entity';

@Entity({ name: 'centro' }) // name is name table
export class Centro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        unique: true,
    })
    desc_centro: string;


    @OneToMany(
        () => Producto,
        (producto) => producto.centro,
        { cascade: false }
    )
    producto?: Producto[]; 
}
