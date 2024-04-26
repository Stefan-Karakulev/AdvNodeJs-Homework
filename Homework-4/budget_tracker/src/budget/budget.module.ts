import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from 'src/iterface';
import { Expense } from 'src/iterface';
@Module({
  imports: [BudgetModule,TypeOrmModule.forFeature([BudgetModule,Income,Expense])],
  providers: [BudgetService],
  controllers: [BudgetController]
})
export class BudgetModule {}
