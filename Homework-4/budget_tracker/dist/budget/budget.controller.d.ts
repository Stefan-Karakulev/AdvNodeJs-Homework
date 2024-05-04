import { BudgetService } from './budget.service';
import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';
import { BudgetEntity } from './entities/budget.entity';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): Promise<BudgetEntity[]>;
    createBudget(createBudgetDto: CreateBudgetDto): Promise<void>;
    getBudgetById(id: string): Promise<BudgetEntity>;
    updateBudget(id: string, updateBudgetDto: UpdateBudgetDto): Promise<BudgetEntity>;
    deleteBudget(id: string): Promise<void>;
}
