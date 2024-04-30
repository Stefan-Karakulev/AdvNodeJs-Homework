import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from 'src/iterface';
import { Expense } from 'src/iterface';
import { BudgetEntity } from './entities/budget.entity';
@Module({
  imports: [BudgetModule,TypeOrmModule.forFeature([BudgetEntity,Income,Expense])],
  providers: [BudgetService],
  controllers: [BudgetController]
})
export class BudgetModule {}
