import { BudgetService } from './budget.service';
import { Budget } from 'src/iterface';
import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): Promise<import("./entities/budget.entity").BudgetEntity[]>;
    createBudget(createBudgetDto: CreateBudgetDto): Promise<void>;
    getBudgetById(id: string): Promise<import("./entities/budget.entity").BudgetEntity>;
    updateBudget(id: string, updateBudgetDto: UpdateBudgetDto): Promise<Budget>;
    deleteBudget(id: string): Promise<void>;
}
