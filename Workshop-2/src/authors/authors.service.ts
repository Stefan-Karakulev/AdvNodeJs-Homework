
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from '../authors/dto/create-authorDto';
import { Author } from '../authors/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private  authorsRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const newAuthor = this.authorsRepository.create(createAuthorDto);
    await this.authorsRepository.save(newAuthor);
    return newAuthor;
  }

  async GetAuthors(): Promise<Author[]> {
    return this.authorsRepository.find({ relations: ['books'] });
  }

  async GetbyId(id: string): Promise<Author> {
    return this.authorsRepository.findOne(
      {where:{id:id},  
      relations: ['books'] });
  }
}