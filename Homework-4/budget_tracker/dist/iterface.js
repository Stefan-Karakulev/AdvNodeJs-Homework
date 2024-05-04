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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = exports.Income = exports.Expense = void 0;
const typeorm_1 = require("typeorm");
const budget_entity_1 = require("./budget/entities/budget.entity");
let Expense = class Expense {
};
exports.Expense = Expense;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Expense.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Expense.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => budget_entity_1.BudgetEntity, budget => budget.expenses),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", budget_entity_1.BudgetEntity)
], Expense.prototype, "budget", void 0);
exports.Expense = Expense = __decorate([
    (0, typeorm_1.Entity)({ name: 'Expense' })
], Expense);
let Income = class Income {
};
exports.Income = Income;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Income.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Income.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => budget_entity_1.BudgetEntity, budget => budget.incomes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", budget_entity_1.BudgetEntity)
], Income.prototype, "budget", void 0);
exports.Income = Income = __decorate([
    (0, typeorm_1.Entity)({ name: 'Income' })
], Income);
var Currency;
(function (Currency) {
    Currency["EUR"] = "EUR";
    Currency["USD"] = "USD";
    Currency["MKD"] = "MKD";
})(Currency || (exports.Currency = Currency = {}));
//# sourceMappingURL=iterface.js.map