import { Injectable } from '@nestjs/common';
import { Expense,Income,Currency,Budget } from '../iterface';
import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';
import {v4 as uuid} from "uuid";
import { InjectRepository } from '@nestjs/typeorm'; 
import { BudgetEntity } from './entities/budget.entity';
import { Repository } from 'typeorm';
@Injectable()
export class BudgetService {
  constructor(
    @InjectRepository(BudgetEntity)
    private BudgetRepository: Repository<BudgetEntity>,

  ) {}
  private budgets: Budget[] = [];
    
      async readBudgets():Promise<BudgetEntity[]> {
        return this.BudgetRepository.find();
      }
     async getBudgetById(id: string) {
        const budget = await this.BudgetRepository.findOne({
          where:{id:id}
        })
        if (!budget) {
          throw new Error('Budget not found');
        }
        return budget;
      }
    
      async createBudget(createBudgetDto: CreateBudgetDto) {
        const newBudget: Budget = {
          id: uuid(),
          title: createBudgetDto.title,
          balance: createBudgetDto.balance,
          currency: createBudgetDto.currency,
          expenses: [],
          incomes: [],
        };
        const budgetEntity=this.BudgetRepository.create(newBudget);
     await this.BudgetRepository.save(budgetEntity);
      }
    
      
  async updateBudget(id: string, updateBudgetDto: UpdateBudgetDto): Promise<BudgetEntity> {
   // const budgetToUpdate = await this.BudgetRepository.findOne(id);//Error na Id
   const budgetToUpdate=await this.getBudgetById(id);
    if (!budgetToUpdate) {
      
      throw new Error('Budget not found');
    }

    if (updateBudgetDto.title) {
      budgetToUpdate.title = updateBudgetDto.title;
    }
    if (updateBudgetDto.balance) {
      budgetToUpdate.balance = updateBudgetDto.balance;
    }
    if (updateBudgetDto.currency) {
      budgetToUpdate.currency = updateBudgetDto.currency;
    }
     
    const budgetEntity = this.BudgetRepository.create(budgetToUpdate);
    await this.BudgetRepository.save(budgetEntity);

    //const updatedBudget = await this.BudgetRepository.save(budgetToUpdate);
    return budgetEntity;
  }
  async deleteBudget(id: string): Promise<void> {
    const budgetToDelete = await this.getBudgetById(id);
    if (!budgetToDelete) {
      throw new Error('Budget not found');
    }

    
    await this.BudgetRepository.delete(id);
  }
}