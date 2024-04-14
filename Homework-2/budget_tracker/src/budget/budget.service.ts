import { Injectable } from '@nestjs/common';
import { Expense,Income,Currency,Budget } from '../iterface';


@Injectable()
export class BudgetService {
    private budgets: Budget[] = [
        {
          id: '1',
          title: 'Monthly Budget',
          balance: 5000,
          currency: Currency.USD,
          expenses: [],
          incomes: [],
        },
       
      ];
    
      readBudgets(): Budget[] {
        return this.budgets;
      }
    }

