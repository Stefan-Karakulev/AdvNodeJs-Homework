import { Budget } from '../iterface';
import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';
export declare class BudgetService {
    private budgets;
    readBudgets(): Budget[];
    getBudgetById(id: string): Budget;
    createBudget(createBudgetDto: CreateBudgetDto): Budget;
    updateBudget(id: string, updateBudgetDto: UpdateBudgetDto): Budget;
    deleteBudget(id: string): void;
}
