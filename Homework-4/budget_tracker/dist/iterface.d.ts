import { BudgetEntity } from './budget/entities/budget.entity';
export declare class Expense {
    id: string;
    name: string;
    budget: BudgetEntity;
}
export declare class Income {
    id: string;
    source: string;
    budget: BudgetEntity;
}
export interface Expense {
    id: string;
    amount: number;
    description: string;
}
export interface Income {
    id: string;
    amount: number;
    description: string;
}
export declare enum Currency {
    EUR = "EUR",
    USD = "USD",
    MKD = "MKD"
}
export interface Budget {
    id: string;
    title: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
}
