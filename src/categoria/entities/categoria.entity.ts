
import { CategoriaCaracteristica } from 'src/producto/entities/categoria.caracteristica.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Caracteristica } from '../../caracteristica/entities/caracteristica.entity';

@Entity({ name: 'categoria' }) // name is name table

export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {
        unique: true,
    })
    desc_categoria: string;

    @ManyToMany(()=> Caracteristica,
    (caracteristica) => caracteristica.categorias)
    @JoinTable({
        name: 'categoria_caracteristica',
        joinColumn: {
            name: 'categoria_id'            
        },
        inverseJoinColumn: {
            name: 'caracteristica_id'
        }
    })
    caracteristica?: Caracteristica[];

    @OneToMany(
        () => CategoriaCaracteristica,
        (catCarac) => catCarac.categoria
    )       
    categoria_caracteristica?:CategoriaCaracteristica[]


}
