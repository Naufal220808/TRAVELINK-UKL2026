"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const destinations_module_1 = require("./destinations/destinations.module");
const vehicle_category_module_1 = require("./vehiclecategory/vehicle-category.module");
const vehicles_module_1 = require("./vehicles/vehicles.module");
const vendors_module_1 = require("./vendors/vendors.module");
const bookings_module_1 = require("./bookings/bookings.module");
const reviews_module_1 = require("./reviews/reviews.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule, destinations_module_1.DestinationModule, vehicle_category_module_1.VehicleCategoryModule, vehicles_module_1.VehiclesModule, vendors_module_1.VendorsModule, bookings_module_1.BookingsModule, reviews_module_1.ReviewsModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map