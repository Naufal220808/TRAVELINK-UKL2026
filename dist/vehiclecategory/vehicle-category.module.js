"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const vehicle_category_service_1 = require("./vehicle-category.service");
const vehicle_category_controller_1 = require("./vehicle-category.controller");
let VehicleCategoryModule = class VehicleCategoryModule {
};
exports.VehicleCategoryModule = VehicleCategoryModule;
exports.VehicleCategoryModule = VehicleCategoryModule = __decorate([
    (0, common_1.Module)({
        providers: [vehicle_category_service_1.VehicleCategoryService],
        controllers: [vehicle_category_controller_1.VehicleCategoryController],
    })
], VehicleCategoryModule);
//# sourceMappingURL=vehicle-category.module.js.map