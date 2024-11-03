import { Plane } from "../model/plane";

// Эй, братан! Это PlaneService класс, он отвечает за управление коллекцией самолетов.
export class PlaneService {
    // Тут мы храним наши самолеты, понял?
    private planes: Plane[] = [];

    // Метод для добавления нового самолета в коллекцию.
    // Сначала проверяем самолет, а потом добавляем его в массив planes.
    addPlane(plane: Plane) {    
        plane.validate(); // Проверяем, что самолет нормальный.
        this.planes.push(plane); // Добавляем самолет в коллекцию.
    }

    // Метод для получения всех самолетов в коллекции.
    getAllPlanes(): Plane[] {
        return this.planes; // Возвращаем все самолеты, братан.
    }

    // Метод для получения самолета по его ID.
    // Возвращаем самолет, если нашли, иначе undefined.
    getPlanesById(id: number): Plane | undefined {
        return this.planes.find(plane => plane.id === id); // Ищем самолет по ID.
    }
}