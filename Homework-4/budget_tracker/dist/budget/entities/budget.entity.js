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
exports.BudgetEntity = void 0;
const typeorm_1 = require("typeorm");
const iterface_1 = require("../../iterface");
const iterface_2 = require("../../iterface");
let BudgetEntity = class BudgetEntity {
};
exports.BudgetEntity = BudgetEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BudgetEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BudgetEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BudgetEntity.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => iterface_1.Expense, expense => expense.budget),
    __metadata("design:type", Array)
], BudgetEntity.prototype, "expenses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => iterface_2.Income, income => income.budget),
    __metadata("design:type", Array)
], BudgetEntity.prototype, "incomes", void 0);
exports.BudgetEntity = BudgetEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'budget' })
], BudgetEntity);
//# sourceMappingURL=budget.entity.js.map