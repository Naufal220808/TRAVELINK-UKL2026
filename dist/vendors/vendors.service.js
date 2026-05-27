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
exports.VendorsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VendorsService = class VendorsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.vendor.findMany({
            include: { user: { select: { id: true, name: true, email: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const vendor = await this.prisma.vendor.findUnique({
            where: { id },
            include: {
                user: { select: { id: true, name: true, email: true } },
                vehicles: true,
            },
        });
        if (!vendor) {
            throw new common_1.NotFoundException('Vendor tidak ditemukan');
        }
        return vendor;
    }
    async findByUserId(userId) {
        return this.prisma.vendor.findUnique({
            where: { userId },
            include: { vehicles: true },
        });
    }
    async create(userId, dto) {
        const existing = await this.prisma.vendor.findUnique({
            where: { userId },
        });
        if (existing) {
            throw new common_1.BadRequestException('Anda sudah terdaftar sebagai vendor');
        }
        await this.prisma.user.update({
            where: { id: userId },
            data: { role: 'VENDOR' },
        });
        return this.prisma.vendor.create({
            data: {
                userId,
                ...dto,
            },
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.vendor.update({
            where: { id },
            data: dto,
        });
    }
    async verify(id) {
        await this.findOne(id);
        return this.prisma.vendor.update({
            where: { id },
            data: { isVerified: true },
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.vendor.delete({
            where: { id },
        });
        return { message: 'Vendor sudah dihapus' };
    }
};
exports.VendorsService = VendorsService;
exports.VendorsService = VendorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VendorsService);
//# sourceMappingURL=vendors.service.js.map