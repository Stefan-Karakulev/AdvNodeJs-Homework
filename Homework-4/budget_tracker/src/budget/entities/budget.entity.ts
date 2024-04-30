
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Expense } from 'src/iterface';
import { Income } from 'src/iterface';

@Entity({name:'budget'})
export class BudgetEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
  @Column()
  balance: number; // 
  
  @Column()
  currency: string; // 

  @OneToMany(() => Expense, expense => expense.budget)
  expenses: Expense[];

  @OneToMany(() => Income, income => income.budget)
  incomes: Income[];
}