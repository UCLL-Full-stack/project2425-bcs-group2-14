const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Эй, братан, подключаем cors, чтобы все пацаны могли заходить

const app = express();

app.use(cors()); // Используем cors, чтобы все свои могли заходить
app.use(bodyParser.json()); // Парсим JSON, чтобы понимать, что пацаны присылают

// Тут будут твои другие маршруты и миддлвары, брат

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер на порту ${PORT}, заходи, братан!`);
});

const corsOptions = {
    origin: '*', // Всем пацанам доступ открыт
    methods: 'GET,POST', // Только GET и POST, брат
    allowedHeaders: 'Content-Type', // Заголовки, которые мы разрешаем
    optionSuccessStatus: 200 // Все четко, статус 200
};

const litakStorePath = path.join(__dirname, 'litakStore.json'); // Путь к файлу с нашими самолетами

app.use(cors(corsOptions)); // Еще раз cors, чтобы все было четко
app.use(bodyParser.json()); // Еще раз парсим JSON, на всякий случай
app.use("/media", express.static(path.join(__dirname, 'assets/media'))); // Статические файлы, братан
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Всем пацанам доступ открыт
    res.header('Access-Control-Allow-Headers', 'Content-Type', "Origin", "X-Requested-With", "Accept"); // Разрешаем нужные заголовки
    next(); // Идем дальше
});
app.get('/media/:filename', (req, res) => {
    const filename = req.params.filename; // Имя файла из запроса
    const mediaPath = path.join(__dirname, 'assets/media', filename); // Путь к файлу
    res.set({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'media/jpg' }); // Заголовки для ответа
    res.sendFile(mediaPath); // Отправляем файл
});
app.get('/litakStore.json', (req, res) => {
    fs.readFile(litakStorePath, (err, data) => {
        if (err) {
            console.log('Ошибка при чтении файла', err);
            res.status(500).send('Ошибка чтения файла');
        } else {
            res.json(JSON.parse(data));
        }
    });
});
app.post('server', (req, res) => {
    const newPlane = req.body; // Новый самолет от пацанов
    fs.readFile(litakStorePath, (err, data) => {
        if (err) {
            console.log('Ошибка при чтении самолетов', err); // Ошибка чтения файла
            res.status(500).send('Ошибка чтения файла'); // Отправляем ошибку
        } else {
            try {
                const planes = JSON.parse(data); // Парсим JSON с самолетами
                newPlane.id = planes.length ? planes[planes.length - 1].id : 1; // Присваиваем ID новому самолету
                planes.push(newPlane); // Добавляем новый самолет в массив
                fs.writeFile(litakStorePath, JSON.stringify(planes, null, 2), (err) => {
                    if (err) {
                        console.log('Ошибка при записи самолетов', err); // Ошибка записи файла
                        res.status(500).send('Ошибка записи файла'); // Отправляем ошибку
                    } else {
                        res.status(201).send(newPlane); // Все четко, отправляем новый самолет
                    }
                });
            } catch (err) {
                console.log('Ошибка при парсинге самолетов', err); // Ошибка парсинга JSON
                res.status(500).send('Ошибка парсинга файла'); // Отправляем ошибку
            }
        }
    });
});