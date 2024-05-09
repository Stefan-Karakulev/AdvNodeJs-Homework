import { Repository } from 'typeorm';
import { CreateAuthorDto } from '../authors/dto/create-authorDto';
import { Author } from '../authors/author.entity';
export declare class AuthorsService {
    private authorsRepository;
    constructor(authorsRepository: Repository<Author>);
    create(createAuthorDto: CreateAuthorDto): Promise<Author>;
    GetAuthors(): Promise<Author[]>;
    GetbyId(id: string): Promise<Author>;
}
