
import { Entity, Column, ManyToOne } from 'typeorm';
import { BudgetEntity } from './budget/entities/budget.entity';

@Entity({name:'Expense'})
export class Expense {
  @Column()
  name: string;

  @ManyToOne(() => BudgetEntity, budget => budget.expenses)
  budget: BudgetEntity;
}

@Entity({name:'Income'})
export class Income {
  @Column()
  source: string;

  
  @ManyToOne(() => BudgetEntity, budget => budget.incomes)
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

  export enum Currency {
    EUR = 'EUR',
    USD = 'USD',
    MKD = 'MKD',
  }
  
  export interface Budget {
    id: string;
    title: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
  }