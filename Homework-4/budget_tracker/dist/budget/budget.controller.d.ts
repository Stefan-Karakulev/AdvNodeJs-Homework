import { BudgetService } from './budget.service';
import { Budget } from 'src/iterface';
import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): Promise<Budget[]>;
    createBudget(createBudgetDto: CreateBudgetDto): Promise<Budget>;
    getBudgetById(id: string): Promise<Budget>;
    updateBudget(id: string, updateBudgetDto: UpdateBudgetDto): Promise<Budget>;
    deleteBudget(id: string): Promise<void>;
}
