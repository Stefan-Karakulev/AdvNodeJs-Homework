import { Controller } from '@nestjs/common';

import {Get, Post, Param, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from '../books/dto/create-bookDto';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.booksService.create(createBookDto);
  }

  @Get()
  async GetBooks() {
    return await this.booksService.GetBooks();
  }

  @Get('id')
  async GetById(@Param('id') id: string) {
    return await this.booksService.GetBookById(id);
  }
}