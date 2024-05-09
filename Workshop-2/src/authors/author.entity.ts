import { Book } from '../books/book.entity';
import { Entity, Timestamp } from 'typeorm';
import { PrimaryColumn,Column,ManyToMany,OneToMany,OneToOne,PrimaryGeneratedColumn,JoinColumn } from 'typeorm';

@Entity({name:"author"})
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
    @JoinColumn()
    @OneToMany(() => Book, book => book.author) 
    books: Book[];
    @Column({type:'bigint'})
    birthDate:Timestamp;
    @Column()
    from: string;
}