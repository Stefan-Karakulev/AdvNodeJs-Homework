import { Currency } from "src/iterface";
export declare class CreateBudgetDto {
    title: string;
    balance: number;
    currency: Currency;
}
export interface UpdateBudgetDto {
    title?: string;
    balance?: number;
    currency?: Currency;
}
