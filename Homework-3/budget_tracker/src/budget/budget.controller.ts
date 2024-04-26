import { Controller,Get,Put,Post,Delete,Body,Param } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Budget } from 'src/iterface';
import { CreateBudgetDto } from './budgetDto';
import { UpdateBudgetDto } from './budgetDto';

@Controller('budget')
export class BudgetController {
    constructor(private readonly budgetService: BudgetService) {}

  @Get()
  listBudgets(): Budget[] {
    return this.budgetService.readBudgets();
  }
  @Post()
  createBudget(@Body() createBudgetDto: CreateBudgetDto): Budget {
    return this.budgetService.createBudget(createBudgetDto);
  }

  @Get('/:id')
  getBudgetById(@Param('id') id: string): Budget {
    return this.budgetService.getBudgetById(id);
  }

  @Put('/:id')
  updateBudget(
    @Param('id') id: string,
    @Body() updateBudgetDto: UpdateBudgetDto,
  ): Budget {
    return this.budgetService.updateBudget(id, updateBudgetDto);
  }

  @Delete('/:id')
  deleteBudget(@Param('id') id: string): void {
    this.budgetService.deleteBudget(id);
  }
}


