import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ugyfel } from "./Ugyfel";

@Entity()
export class Keszlet {

    @PrimaryGeneratedColumn() 
    id: number; 
   
    @Column() 
    gyarto: string; 
    
    @Column() 
    rendszam: string;

    @Column()
    alvazszam: number;

    @Column() 
    datum: string; 
    
    @Column() 
    sorszam: number;

    @Column()
    dij: number;

    @Column() 
    km: number; 
    
    @Column() 
    statusz: string;

    @ManyToOne(() => Ugyfel, (ugyfel) => ugyfel.keszletek)
    ugyfel: Ugyfel;
}