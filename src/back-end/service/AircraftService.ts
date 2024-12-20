import { PrismaClient } from "@prisma/client";
import { plane } from "../model/plane";

const prisma = new PrismaClient();

export class AircraftService {
    async getAllPlanes(): Promise<plane[]> {
        const planes = await prisma.plane.findMany();
        return planes.map(plane.fromDb);

    }

    async getPlaneById(id: number): Promise<plane | null> {
        const prismaPlane = await prisma.plane.findUnique({
            where: {
                id: id
            }
        });
        return prismaPlane ? plane.fromDb(prismaPlane) : null;
    }

    async createPlane(data: {make:string; 
      model:string; 
      Year: number; 
      type: string; 
      capacity: number; 
      range: number; 
      regNumber: number; 
      location: string;
    }): Promise<plane> {
        const prismaPlane = await prisma.plane.create({
            data: data
        });
        return plane.fromDb(prismaPlane);
    }

    async updatePlane(id: number, plane: plane): Promise<plane> {
        return await prisma.plane.update({
            where: {
                id: id
            },
            data: plane
        });
    }

    async deletePlane(id: number): Promise<plane> {
        return await prisma.plane.delete({
            where: {
                id: id
            }
        });
    }
}
  
