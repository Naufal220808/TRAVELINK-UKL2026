import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    findAll(): Promise<({
        user: {
            name: string;
            email: string;
            id: number;
        };
        vehicle: {
            destination: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                type: string;
                city: string;
                image: string | null;
                isActive: boolean;
            };
            category: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                icon: string | null;
            };
        } & {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            vendorId: number;
            categoryId: number;
            destinationId: number;
            description: string | null;
            capacity: number;
            pricePerDay: import("@prisma/client/runtime/library").Decimal;
            status: import("@prisma/client").$Enums.VehicleStatus;
        };
        payment: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.PaymentStatus;
            bookingId: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            method: string | null;
            paidAt: Date | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vehicleId: number;
        startDate: Date;
        endDate: Date;
        notes: string | null;
        bookingCode: string;
        totalDays: number;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
    })[]>;
    findMyBookings(user: any): Promise<({
        vehicle: {
            destination: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                type: string;
                city: string;
                image: string | null;
                isActive: boolean;
            };
            category: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                icon: string | null;
            };
        } & {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            vendorId: number;
            categoryId: number;
            destinationId: number;
            description: string | null;
            capacity: number;
            pricePerDay: import("@prisma/client/runtime/library").Decimal;
            status: import("@prisma/client").$Enums.VehicleStatus;
        };
        payment: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.PaymentStatus;
            bookingId: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            method: string | null;
            paidAt: Date | null;
        };
        review: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            vehicleId: number;
            bookingId: number;
            rating: number;
            comment: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vehicleId: number;
        startDate: Date;
        endDate: Date;
        notes: string | null;
        bookingCode: string;
        totalDays: number;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            name: string;
            email: string;
            id: number;
        };
        vehicle: {
            destination: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                type: string;
                city: string;
                image: string | null;
                isActive: boolean;
            };
            category: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                icon: string | null;
            };
        } & {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            vendorId: number;
            categoryId: number;
            destinationId: number;
            description: string | null;
            capacity: number;
            pricePerDay: import("@prisma/client/runtime/library").Decimal;
            status: import("@prisma/client").$Enums.VehicleStatus;
        };
        payment: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.PaymentStatus;
            bookingId: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            method: string | null;
            paidAt: Date | null;
        };
        review: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            vehicleId: number;
            bookingId: number;
            rating: number;
            comment: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vehicleId: number;
        startDate: Date;
        endDate: Date;
        notes: string | null;
        bookingCode: string;
        totalDays: number;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
    }>;
    create(user: any, dto: CreateBookingDto): Promise<{
        vehicle: {
            destination: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                type: string;
                city: string;
                image: string | null;
                isActive: boolean;
            };
            category: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                icon: string | null;
            };
        } & {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            vendorId: number;
            categoryId: number;
            destinationId: number;
            description: string | null;
            capacity: number;
            pricePerDay: import("@prisma/client/runtime/library").Decimal;
            status: import("@prisma/client").$Enums.VehicleStatus;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vehicleId: number;
        startDate: Date;
        endDate: Date;
        notes: string | null;
        bookingCode: string;
        totalDays: number;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
    }>;
    cancel(id: number, user: any): Promise<{
        vehicle: {
            destination: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                type: string;
                city: string;
                image: string | null;
                isActive: boolean;
            };
            category: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                icon: string | null;
            };
        } & {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            vendorId: number;
            categoryId: number;
            destinationId: number;
            description: string | null;
            capacity: number;
            pricePerDay: import("@prisma/client/runtime/library").Decimal;
            status: import("@prisma/client").$Enums.VehicleStatus;
        };
        payment: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.PaymentStatus;
            bookingId: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            method: string | null;
            paidAt: Date | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vehicleId: number;
        startDate: Date;
        endDate: Date;
        notes: string | null;
        bookingCode: string;
        totalDays: number;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
    }>;
    updateStatus(id: number, body: {
        status: string;
    }): Promise<{
        vehicle: {
            destination: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                type: string;
                city: string;
                image: string | null;
                isActive: boolean;
            };
            category: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                icon: string | null;
            };
        } & {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            vendorId: number;
            categoryId: number;
            destinationId: number;
            description: string | null;
            capacity: number;
            pricePerDay: import("@prisma/client/runtime/library").Decimal;
            status: import("@prisma/client").$Enums.VehicleStatus;
        };
        payment: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.PaymentStatus;
            bookingId: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            method: string | null;
            paidAt: Date | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vehicleId: number;
        startDate: Date;
        endDate: Date;
        notes: string | null;
        bookingCode: string;
        totalDays: number;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
    }>;
    confirmPayment(id: number): Promise<{
        vehicle: {
            destination: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                type: string;
                city: string;
                image: string | null;
                isActive: boolean;
            };
            category: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                icon: string | null;
            };
        } & {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            vendorId: number;
            categoryId: number;
            destinationId: number;
            description: string | null;
            capacity: number;
            pricePerDay: import("@prisma/client/runtime/library").Decimal;
            status: import("@prisma/client").$Enums.VehicleStatus;
        };
        payment: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.PaymentStatus;
            bookingId: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            method: string | null;
            paidAt: Date | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        vehicleId: number;
        startDate: Date;
        endDate: Date;
        notes: string | null;
        bookingCode: string;
        totalDays: number;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
    }>;
}
