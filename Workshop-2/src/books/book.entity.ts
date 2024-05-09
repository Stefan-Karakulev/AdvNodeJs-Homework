import { Author } from '../authors/author.entity';
import { Entity, JoinColumn } from 'typeorm';
import { PrimaryColumn,Column,ManyToMany,OneToMany,OneToOne,PrimaryGeneratedColumn,ManyToOne } from 'typeorm';

@Entity({ name: "books" })
export class Book {
    @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  genre: string;
 @JoinColumn()
  @ManyToOne(() => Author, author => author.books) 
  author: Author;

  @Column()
  publisher: string;

  @Column()
  isbn: number;
}