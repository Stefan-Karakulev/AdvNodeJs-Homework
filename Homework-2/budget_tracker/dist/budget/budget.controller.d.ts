import { BudgetService } from './budget.service';
import { Budget } from 'src/iterface';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): Budget[];
}
