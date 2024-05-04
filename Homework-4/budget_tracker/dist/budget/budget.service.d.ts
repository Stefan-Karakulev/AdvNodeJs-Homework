import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';
import { BudgetEntity } from './entities/budget.entity';
import { Repository } from 'typeorm';
export declare class BudgetService {
    private BudgetRepository;
    constructor(BudgetRepository: Repository<BudgetEntity>);
    private budgets;
    readBudgets(): Promise<BudgetEntity[]>;
    getBudgetById(id: string): Promise<BudgetEntity>;
    createBudget(createBudgetDto: CreateBudgetDto): Promise<void>;
    updateBudget(id: string, updateBudgetDto: UpdateBudgetDto): Promise<BudgetEntity>;
    deleteBudget(id: string): Promise<void>;
}
