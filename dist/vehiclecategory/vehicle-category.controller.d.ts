import { VehicleCategoryService } from './vehicle-category.service';
import { CreateVehicleCategoryDto } from './dto/create-vehicle-category.dto';
import { UpdateVehicleCategoryDto } from './dto/update-vehicle-category.dto';
export declare class VehicleCategoryController {
    private readonly vehicleCategoryService;
    constructor(vehicleCategoryService: VehicleCategoryService);
    findAll(): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        icon: string | null;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        icon: string | null;
    }>;
    create(dto: CreateVehicleCategoryDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        icon: string | null;
    }>;
    update(id: number, dto: UpdateVehicleCategoryDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        icon: string | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
