import Express, { Request, Response } from "express";
import { PlaneService } from "../service/planeService";

const router = Express.Router(); // Создаем новый роутер Express

const planeService = new PlaneService(); // Создаем экземпляр PlaneService

// Получить все самолеты
router.get("/", (req: Request, res: Response) => {
    const planes = planeService.getAllPlanes(); // Получаем все самолеты из PlaneService
    res.json(planes); // Отправляем самолеты в формате JSON
});

// Получить самолет по ID
router.get("/planes/:id", (req: Request, res: Response) => {
    const plane = planeService.getPlanesById(Number(req.params.id)); // Получаем самолет по ID из параметров запроса
    if (plane) {
        res.json(plane); // Если самолет найден, отправляем его в формате JSON
    } else {
        res.status(404).send("Plane not found"); // Если самолет не найден, отправляем статус 404 и сообщение
    }
});

export default router; // Экспортируем роутер по умолчанию