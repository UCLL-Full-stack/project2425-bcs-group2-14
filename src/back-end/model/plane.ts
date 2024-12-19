export class Plane {
    constructor(
        public make: string,
        public model: string,
        public year: number,
        public type: string,
        public capacity: number,
        public range: number,
        public regNumber: number,
        public location: string,
        public price: number
    ) {}

    // Метод для проверки самолета.
    validate() {
        if (this.price <= 0) {
            throw new Error("Price must be greater than 0"); // Цена должна быть больше нуля, понял?
        }
    }

    static from(prismaPlane: any): Plane {
        return new Plane(
            prismaPlane.make,
            prismaPlane.model,
            prismaPlane.year,
            prismaPlane.type,
            prismaPlane.capacity,
            prismaPlane.range,
            prismaPlane.regNumber,
            prismaPlane.location,
            prismaPlane.price
        );
    }
};