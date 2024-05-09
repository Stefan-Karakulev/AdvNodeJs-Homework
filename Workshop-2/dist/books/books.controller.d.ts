import { BooksService } from './books.service';
import { CreateBookDto } from '../books/dto/create-bookDto';
import { Book } from './book.entity';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<Book>;
    GetBooks(): Promise<Book[]>;
    GetById(id: string): Promise<Book>;
}
