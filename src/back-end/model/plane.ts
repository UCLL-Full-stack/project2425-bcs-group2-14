export class Plane {
    constructor(
        public id: number, // Идентификатор самолета, братан.
        public name: string, // Имя самолета, понял?
        public capacity: number, // Вместимость самолета, сколько пассажиров влезет.
        public manufacturer: string, // Производитель самолета, кто его сделал.
        public year: number, // Год выпуска самолета.
        public price: number, // Цена самолета, сколько стоит.
    ) {}

    // Метод для проверки самолета.
    validate() {
        if (this.price <= 0) {
            throw new Error("Price must be greater than 0"); // Цена должна быть больше нуля, понял?
        }
    }
};