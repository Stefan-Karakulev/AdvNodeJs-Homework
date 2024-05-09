import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from '../books/dto/create-bookDto';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private  booksRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const newBook = this.booksRepository.create({...createBookDto,author:null});
    await this.booksRepository.save(newBook);
    return newBook;
  }

  async GetBooks(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async GetBookById(id: string): Promise<Book> {
    return this.booksRepository.findOne(
      {where:{id:id},  
      relations: ['author'] });
  }
  }
