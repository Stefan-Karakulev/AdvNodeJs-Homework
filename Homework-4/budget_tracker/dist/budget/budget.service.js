"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const typeorm_1 = require("@nestjs/typeorm");
const budget_entity_1 = require("./entities/budget.entity");
const typeorm_2 = require("typeorm");
let BudgetService = class BudgetService {
    constructor(BudgetRepository) {
        this.BudgetRepository = BudgetRepository;
        this.budgets = [];
    }
    async readBudgets() {
        return this.BudgetRepository.find();
    }
    async getBudgetById(id) {
        const budget = await this.BudgetRepository.findOne({
            where: { id: id }
        });
        if (!budget) {
            throw new Error('Budget not found');
        }
        return budget;
    }
    async createBudget(createBudgetDto) {
        const newBudget = {
            id: (0, uuid_1.v4)(),
            title: createBudgetDto.title,
            balance: createBudgetDto.balance,
            currency: createBudgetDto.currency,
            expenses: [],
            incomes: [],
        };
        const budgetEntity = this.BudgetRepository.create(newBudget);
        await this.BudgetRepository.save(budgetEntity);
    }
    async updateBudget(id, updateBudgetDto) {
        const budgetToUpdate = await this.getBudgetById(id);
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
        return budgetEntity;
    }
    async deleteBudget(id) {
        const budgetToDelete = await this.getBudgetById(id);
        if (!budgetToDelete) {
            throw new Error('Budget not found');
        }
        await this.BudgetRepository.delete(id);
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(budget_entity_1.BudgetEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BudgetService);
//# sourceMappingURL=budget.service.js.map