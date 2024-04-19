import { BudgetService } from './budget.service';
import { Budget } from 'src/iterface';
import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): Budget[];
    createBudget(createBudgetDto: CreateBudgetDto): Budget;
    getBudgetById(id: string): Budget;
    updateBudget(id: string, updateBudgetDto: UpdateBudgetDto): Budget;
    deleteBudget(id: string): void;
}
