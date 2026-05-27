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
exports.BookingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let BookingsService = class BookingsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    generateBookingCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = 'BK-';
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    }
    calculateDays(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diff = end.getTime() - start.getTime();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    async findAll() {
        return this.prisma.booking.findMany({
            include: {
                user: { select: { id: true, name: true, email: true } },
                vehicle: { include: { destination: true, category: true } },
                payment: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findMyBookings(userId) {
        return this.prisma.booking.findMany({
            where: { userId },
            include: {
                vehicle: { include: { destination: true, category: true } },
                payment: true,
                review: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const booking = await this.prisma.booking.findUnique({
            where: { id },
            include: {
                user: { select: { id: true, name: true, email: true } },
                vehicle: { include: { destination: true, category: true } },
                payment: true,
                review: true,
            },
        });
        if (!booking) {
            throw new common_1.NotFoundException('Booking tidak ditemukan');
        }
        return booking;
    }
    async create(userId, dto) {
        const vehicle = await this.prisma.vehicle.findUnique({
            where: { id: dto.vehicleId },
        });
        if (!vehicle) {
            throw new common_1.NotFoundException('Kendaraan tidak ditemukan');
        }
        if (vehicle.status !== 'ACTIVE') {
            throw new common_1.BadRequestException('Kendaraan tidak tersedia');
        }
        const totalDays = this.calculateDays(dto.startDate, dto.endDate);
        if (totalDays < 1) {
            throw new common_1.BadRequestException('Tanggal tidak valid');
        }
        const totalPrice = Number(vehicle.pricePerDay) * totalDays;
        const bookingCode = this.generateBookingCode();
        const booking = await this.prisma.booking.create({
            data: {
                bookingCode,
                userId,
                vehicleId: dto.vehicleId,
                startDate: new Date(dto.startDate),
                endDate: new Date(dto.endDate),
                totalDays,
                totalPrice,
                notes: dto.notes,
            },
            include: {
                vehicle: { include: { destination: true, category: true } },
            },
        });
        await this.prisma.payment.create({
            data: {
                bookingId: booking.id,
                amount: totalPrice,
                status: client_1.PaymentStatus.PENDING,
            },
        });
        return booking;
    }
    async cancel(id, userId) {
        const booking = await this.findOne(id);
        if (booking.userId !== userId) {
            throw new common_1.ForbiddenException('Anda tidak berhak membatalkan booking ini');
        }
        const cancellableStatuses = [
            client_1.BookingStatus.PENDING_PAYMENT,
            client_1.BookingStatus.CONFIRMED,
        ];
        if (!cancellableStatuses.includes(booking.status)) {
            throw new common_1.BadRequestException(`Booking dengan status "${booking.status}" tidak dapat dibatalkan`);
        }
        if (booking.status === client_1.BookingStatus.CONFIRMED && booking.payment) {
            await this.prisma.payment.update({
                where: { bookingId: id },
                data: {
                    status: client_1.PaymentStatus.REFUNDED,
                },
            });
        }
        return this.prisma.booking.update({
            where: { id },
            data: { status: client_1.BookingStatus.CANCELLED },
            include: {
                vehicle: { include: { destination: true, category: true } },
                payment: true,
            },
        });
    }
    async updateStatus(id, status) {
        const validStatuses = Object.values(client_1.BookingStatus);
        if (!validStatuses.includes(status)) {
            throw new common_1.BadRequestException(`Status tidak valid. Status yang tersedia: ${validStatuses.join(', ')}`);
        }
        await this.findOne(id);
        return this.prisma.booking.update({
            where: { id },
            data: { status: status },
            include: {
                vehicle: { include: { destination: true, category: true } },
                payment: true,
            },
        });
    }
    async confirmPayment(id) {
        const booking = await this.findOne(id);
        if (booking.status !== client_1.BookingStatus.PENDING_PAYMENT) {
            throw new common_1.BadRequestException('Hanya booking dengan status PENDING_PAYMENT yang bisa dikonfirmasi');
        }
        await this.prisma.payment.update({
            where: { bookingId: id },
            data: {
                status: client_1.PaymentStatus.PAID,
                paidAt: new Date(),
                method: 'MANUAL',
            },
        });
        return this.prisma.booking.update({
            where: { id },
            data: { status: client_1.BookingStatus.CONFIRMED },
            include: {
                payment: true,
                vehicle: { include: { destination: true, category: true } },
            },
        });
    }
};
exports.BookingsService = BookingsService;
exports.BookingsService = BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingsService);
//# sourceMappingURL=bookings.service.js.map