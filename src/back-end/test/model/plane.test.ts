import exp from "constants";
import { Plane } from "../../model/plane";

// Тестируем валидацию самолета, показываем ошибку, если цена не положительная
test("Plane validation, show error if price is not positive", () => {
    // Ожидаем, что создание самолета с отрицательной ценой вызовет ошибку с сообщением "Price must be greater than 0"
    expect(() => new Plane(1, "Boeing 737", 200, "Boeing", 1998, -100)).toThrow("Price must be greater than 0");
});