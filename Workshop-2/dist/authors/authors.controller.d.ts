import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from '../authors/dto/create-authorDto';
import { Author } from './author.entity';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    create(createAuthorDto: CreateAuthorDto): Promise<Author>;
    findAll(): Promise<Author[]>;
    findOne(id: string): Promise<Author>;
}
