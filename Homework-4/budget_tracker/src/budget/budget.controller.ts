import { Controller,Get,Put,Post,Delete,Body,Param } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Budget } from 'src/iterface';
import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';

@Controller('budget')
export class BudgetController {
    constructor(private readonly budgetService: BudgetService) {}

  @Get()
  async listBudgets(): Promise<Budget[]> {
    return  this.budgetService.readBudgets();
  }
  @Post() 
  async createBudget(@Body() createBudgetDto: CreateBudgetDto): Promise<Budget> {
    return this.budgetService.createBudget(createBudgetDto);
  }

  @Get('/:id')
  async getBudgetById(@Param('id') id: string): Promise<Budget> {
    return this.budgetService.getBudgetById(id);
  }

  @Put('/:id')
  async updateBudget(
    @Param('id') id: string,
    @Body() updateBudgetDto: UpdateBudgetDto,
  ): Promise<Budget> {
    return this.budgetService.updateBudget(id, updateBudgetDto);
  }

  @Delete('/:id')
  async deleteBudget(@Param('id') id: string): Promise<void> {
    this.budgetService.deleteBudget(id);
  }
}


