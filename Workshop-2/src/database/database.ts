import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '../authors/author.entity';
import { Book } from '../books/book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author, Book]), 
  ],
  exports: [TypeOrmModule], 
})
export class DatabaseModule {}