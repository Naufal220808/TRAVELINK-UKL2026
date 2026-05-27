import { PrismaService } from '../prisma/prisma.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
export declare class VehiclesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        vendor: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            city: string | null;
            userId: number;
            businessName: string;
            address: string | null;
            isVerified: boolean;
            bankName: string | null;
            bankAccount: string | null;
        };
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
        images: {
            id: number;
            createdAt: Date;
            vehicleId: number;
            url: string;
            isPrimary: boolean;
        }[];
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
    })[]>;
    findOne(id: number): Promise<{
        vendor: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            city: string | null;
            userId: number;
            businessName: string;
            address: string | null;
            isVerified: boolean;
            bankName: string | null;
            bankAccount: string | null;
        };
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
        reviews: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            vehicleId: number;
            bookingId: number;
            rating: number;
            comment: string | null;
        }[];
        category: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            icon: string | null;
        };
        images: {
            id: number;
            createdAt: Date;
            vehicleId: number;
            url: string;
            isPrimary: boolean;
        }[];
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
    }>;
    findByDestination(destinationId: number): Promise<({
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
        images: {
            id: number;
            createdAt: Date;
            vehicleId: number;
            url: string;
            isPrimary: boolean;
        }[];
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
    })[]>;
    create(dto: CreateVehicleDto): Promise<{
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
    }>;
    update(id: number, dto: UpdateVehicleDto): Promise<{
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
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
