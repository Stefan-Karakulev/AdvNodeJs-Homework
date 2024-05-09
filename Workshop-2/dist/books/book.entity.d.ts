import { Author } from '../authors/author.entity';
export declare class Book {
    id: string;
    title: string;
    description: string;
    genre: string;
    author: Author;
    publisher: string;
    isbn: number;
}
