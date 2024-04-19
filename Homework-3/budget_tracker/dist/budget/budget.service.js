"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const iterface_1 = require("../iterface");
const uuid_1 = require("uuid");
let BudgetService = class BudgetService {
    constructor() {
        this.budgets = [
            {
                id: (0, uuid_1.v4)(),
                title: 'Monthly Budget',
                balance: 5000,
                currency: iterface_1.Currency.USD,
                expenses: [],
                incomes: [],
            },
            {
                id: (0, uuid_1.v4)(),
                title: 'Weekly Budget',
                balance: 2000,
                currency: iterface_1.Currency.EUR,
                expenses: [],
                incomes: [],
            },
        ];
    }
    readBudgets() {
        return this.budgets;
    }
    getBudgetById(id) {
        const budget = this.budgets.find(b => b.id === id);
        if (!budget) {
            throw new Error('Budget not found');
        }
        return budget;
    }
    createBudget(createBudgetDto) {
        const newBudget = {
            id: (0, uuid_1.v4)(),
            title: createBudgetDto.title,
            balance: createBudgetDto.balance,
            currency: createBudgetDto.currency,
            expenses: [],
            incomes: [],
        };
        this.budgets.push(newBudget);
        return newBudget;
    }
    updateBudget(id, updateBudgetDto) {
        const budget = this.getBudgetById(id);
        if (updateBudgetDto.title) {
            budget.title = updateBudgetDto.title;
        }
        if (updateBudgetDto.balance) {
            budget.balance = updateBudgetDto.balance;
        }
        if (updateBudgetDto.currency) {
            budget.currency = updateBudgetDto.currency;
        }
        return budget;
    }
    deleteBudget(id) {
        const budgetToDelete = this.getBudgetById(id);
        this.budgets = this.budgets.filter(budget => budget !== budgetToDelete);
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)()
], BudgetService);
//# sourceMappingURL=budget.service.js.map