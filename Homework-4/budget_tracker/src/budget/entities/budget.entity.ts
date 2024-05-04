
import { Entity, PrimaryGeneratedColumn, Column, OneToMany,JoinColumn } from 'typeorm';
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
  @JoinColumn()
  expenses: Expense[];

  @OneToMany(() => Income, income => income.budget)
  @JoinColumn()
  incomes: Income[];
}