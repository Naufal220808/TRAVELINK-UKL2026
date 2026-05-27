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
exports.VehicleCategoryController = void 0;
const common_1 = require("@nestjs/common");
const vehicle_category_service_1 = require("./vehicle-category.service");
const create_vehicle_category_dto_1 = require("./dto/create-vehicle-category.dto");
const update_vehicle_category_dto_1 = require("./dto/update-vehicle-category.dto");
const jwt_guard_1 = require("../auth/jwt.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
let VehicleCategoryController = class VehicleCategoryController {
    constructor(vehicleCategoryService) {
        this.vehicleCategoryService = vehicleCategoryService;
    }
    findAll() {
        return this.vehicleCategoryService.findAll();
    }
    findOne(id) {
        return this.vehicleCategoryService.findOne(id);
    }
    create(dto) {
        return this.vehicleCategoryService.create(dto);
    }
    update(id, dto) {
        return this.vehicleCategoryService.update(id, dto);
    }
    remove(id) {
        return this.vehicleCategoryService.remove(id);
    }
};
exports.VehicleCategoryController = VehicleCategoryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehicleCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VehicleCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vehicle_category_dto_1.CreateVehicleCategoryDto]),
    __metadata("design:returntype", void 0)
], VehicleCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_vehicle_category_dto_1.UpdateVehicleCategoryDto]),
    __metadata("design:returntype", void 0)
], VehicleCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], VehicleCategoryController.prototype, "remove", null);
exports.VehicleCategoryController = VehicleCategoryController = __decorate([
    (0, common_1.Controller)('vehicle-categories'),
    __metadata("design:paramtypes", [vehicle_category_service_1.VehicleCategoryService])
], VehicleCategoryController);
//# sourceMappingURL=vehicle-category.controller.js.map