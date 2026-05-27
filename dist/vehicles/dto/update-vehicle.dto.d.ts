import { VehicleStatus } from '@prisma/client';
export declare class UpdateVehicleDto {
    name?: string;
    description?: string;
    capacity?: number;
    pricePerDay?: number;
    status?: VehicleStatus;
}
