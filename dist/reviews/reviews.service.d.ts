import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        user: {
            name: string;
            id: number;
        };
        vehicle: {
            name: string;
            id: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        vehicleId: number;
        bookingId: number;
        rating: number;
        comment: string | null;
    })[]>;
    findByVehicle(vehicleId: number): Promise<({
        user: {
            name: string;
            id: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        vehicleId: number;
        bookingId: number;
        rating: number;
        comment: string | null;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            name: string;
            id: number;
        };
        vehicle: {
            name: string;
            id: number;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        vehicleId: number;
        bookingId: number;
        rating: number;
        comment: string | null;
    }>;
    create(userId: number, dto: CreateReviewDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        vehicleId: number;
        bookingId: number;
        rating: number;
        comment: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        vehicleId: number;
        bookingId: number;
        rating: number;
        comment: string | null;
    }>;
}
