import { PrismaService } from '../prisma/prisma.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
export declare class VendorsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        user: {
            name: string;
            email: string;
            id: number;
        };
    } & {
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
    })[]>;
    findOne(id: number): Promise<{
        user: {
            name: string;
            email: string;
            id: number;
        };
        vehicles: {
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
        }[];
    } & {
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
    }>;
    findByUserId(userId: number): Promise<{
        vehicles: {
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
        }[];
    } & {
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
    }>;
    create(userId: number, dto: CreateVendorDto): Promise<{
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
    }>;
    update(id: number, dto: UpdateVendorDto): Promise<{
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
    }>;
    verify(id: number): Promise<{
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
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
