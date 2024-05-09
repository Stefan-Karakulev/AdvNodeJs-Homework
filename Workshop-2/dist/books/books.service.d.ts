import { Repository } from 'typeorm';
import { CreateBookDto } from '../books/dto/create-bookDto';
import { Book } from './book.entity';
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Book>);
    create(createBookDto: CreateBookDto): Promise<Book>;
    GetBooks(): Promise<Book[]>;
    GetBookById(id: string): Promise<Book>;
}
