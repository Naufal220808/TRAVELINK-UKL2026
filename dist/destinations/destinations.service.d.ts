import { PrismaService } from '../prisma/prisma.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
export declare class DestinationService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        type: string;
        city: string;
        image: string | null;
        isActive: boolean;
    }[]>;
    findOne(id: number): Promise<{
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
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        type: string;
        city: string;
        image: string | null;
        isActive: boolean;
    }>;
    create(dto: CreateDestinationDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        type: string;
        city: string;
        image: string | null;
        isActive: boolean;
    }>;
    update(id: number, dto: UpdateDestinationDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        type: string;
        city: string;
        image: string | null;
        isActive: boolean;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
