import { Expense } from 'src/iterface';
import { Income } from 'src/iterface';
export declare class BudgetEntity {
    id: string;
    title: string;
    balance: number;
    currency: string;
    expenses: Expense[];
    incomes: Income[];
}
