import { Book } from '../books/book.entity';
import { Timestamp } from 'typeorm';
export declare class Author {
    id: string;
    firstName: string;
    lastName: string;
    books: Book[];
    birthDate: Timestamp;
    from: string;
}
