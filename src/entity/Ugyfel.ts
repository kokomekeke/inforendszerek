import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Keszlet } from "./Keszlet";

@Entity()
export class Ugyfel {
    
    @PrimaryGeneratedColumn() 
    id: number; 
   
    @Column() 
    nev: string; 
    
    @Column() 
    cim: string;

    @Column()
    ig: string;

    @Column()
    tel: string;

    @OneToMany(() => Keszlet, (keszlet) => keszlet.ugyfel) 
    keszletek: Keszlet[];
}