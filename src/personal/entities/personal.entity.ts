import { Producto } from "src/producto/entities/producto.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'personal' }) // name is name table
export class Personal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', {        
    })
    apellidos: string;

    @Column('text', {        
    })
    nombres: string;

    @Column('text', {        
    })
    dni: string;

    @Column('text', {        
    })
    codigo_planilla: string;

    @OneToMany(
        () => Producto,
        (producto) => producto.personal,   
        { cascade: true}   
    )  
    @JoinColumn()      
    producto?:Producto[]



    
}
