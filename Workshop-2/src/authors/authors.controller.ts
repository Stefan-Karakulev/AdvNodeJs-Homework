import { Controller } from '@nestjs/common';
import { Get, Post, Body, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from '../authors/dto/create-authorDto';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post('/create')
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return await this.authorsService.create(createAuthorDto);
  }

  @Get()
  async findAll() {
    return await this.authorsService.GetAuthors();
  }

  @Get('id')
  async findOne(@Param('id') id: string){
    return this.authorsService.GetbyId(id);
  }
}