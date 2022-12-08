import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'marca' }) // name is name table
export class Marca {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        unique: true,
    })
    desc_marca: string;

    @OneToMany(
        () => Producto,
        (producto) => producto.marca,
        { cascade: false }
    )
    producto?: Producto[];
}
