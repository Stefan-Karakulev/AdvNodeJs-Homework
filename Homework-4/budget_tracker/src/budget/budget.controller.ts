import { Controller,Get,Put,Post,Delete,Body,Param } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Budget } from 'src/iterface';
import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';
import { BudgetEntity } from './entities/budget.entity';

@Controller('budget')
export class BudgetController {
    constructor(private readonly budgetService: BudgetService) {}

  @Get()
  async listBudgets() {
    return  this.budgetService.readBudgets();
  }
  @Post() 
  async createBudget(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetService.createBudget(createBudgetDto);
  }

  @Get('/:id')
  async getBudgetById(@Param('id') id: string) {
    return this.budgetService.getBudgetById(id);
  }

  @Put('/:id')
  async updateBudget(
    @Param('id') id: string,
    @Body() updateBudgetDto: UpdateBudgetDto,
  ){
    return this.budgetService.updateBudget(id, updateBudgetDto);
  }

  @Delete('/:id')
  async deleteBudget(@Param('id') id: string) {
    this.budgetService.deleteBudget(id);
  }
}


