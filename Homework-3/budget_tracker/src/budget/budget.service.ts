import { Injectable } from '@nestjs/common';
import { Expense,Income,Currency,Budget } from '../iterface';
import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';
import {v4 as uuid} from "uuid" 
@Injectable()
export class BudgetService {
    private budgets: Budget[] = [
        {
          id: uuid(),
          title: 'Monthly Budget',
          balance: 5000,
          currency: Currency.USD,
          expenses: [],
          incomes: [],
        },
        {
          id: uuid(),
          title: 'Weekly Budget',
          balance: 2000,
          currency: Currency.EUR,
          expenses: [],
          incomes: [],
        },
      ];
    
      readBudgets(): Budget[] {
        return this.budgets;
      }
      getBudgetById(id: string): Budget {
        const budget = this.budgets.find(b => b.id === id);
        if (!budget) {
          throw new Error('Budget not found');
        }
        return budget;
      }
    
      createBudget(createBudgetDto: CreateBudgetDto): Budget {
        const newBudget: Budget = {
          id: uuid(),
          title: createBudgetDto.title,
          balance: createBudgetDto.balance,
          currency: createBudgetDto.currency,
          expenses: [],
          incomes: [],
        };
        this.budgets.push(newBudget);
        return newBudget;
      }
    
      updateBudget(id: string, updateBudgetDto: UpdateBudgetDto): Budget {
        const budget = this.getBudgetById(id);
        if (updateBudgetDto.title) {
          budget.title = updateBudgetDto.title;
        }
        if (updateBudgetDto.balance) {
          budget.balance = updateBudgetDto.balance;
        }
        if (updateBudgetDto.currency) {
          budget.currency = updateBudgetDto.currency;
        }
        return budget;
      }
    
      deleteBudget(id: string): void {
        const budgetToDelete = this.getBudgetById(id);
    this.budgets = this.budgets.filter(budget => budget !== budgetToDelete);
      }
    }
    

