import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
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
    create(user: any, dto: CreateReviewDto): Promise<{
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
