# pr4-web-rest-online-store

## Практична робота №4

**Тема:** Розроблення REST-ендпоінтів засобами NestJS.

**Варіант 4:** Доставка їжі та ресторани.

**Студент:** Феделеш Андрій КН-41

## Мета роботи

Ознайомитися з розробленням REST API за допомогою фреймворку NestJS, навчитися створювати контролери, сервіси та DTO, реалізувати основні HTTP-операції для роботи з даними.

## Встановлені залежності

У процесі розроблення використовувалися:

- **Node.js** — середовище виконання JavaScript.
- **npm** — менеджер пакетів.
- **NestJS** — серверний фреймворк для розроблення застосунків.
- **TypeScript** — мова програмування.
- **Thunder Client** — інструмент для тестування REST API.

## Структура проєкту

Основні файли та директорії проєкту:

```text
online-store/
├── src/
│   ├── dishes/
│   │   ├── dto/
│   │   │   ├── create-dish.dto.ts
│   │   │   └── update-dish.dto.ts
│   │   ├── dishes.controller.ts
│   │   └── dishes.service.ts
│   │ 
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── package.json
├── tsconfig.json
└── README.md
```

## Опис реалізації

### 1. DTO (Data Transfer Object)

Для опису даних страв створено два DTO-класи.

**CreateDishDto** — визначає обов'язкові поля для створення нової страви:

- `title` — назва страви;
- `price` — ціна;
- `weightGrams` — вага у грамах;
- `calories` — калорійність;
- `isSpicy` — ознака гостроти.

<img width="384" height="213" alt="зображення" src="https://github.com/user-attachments/assets/80d5b05a-4330-4c17-a679-464ea0600a21" />


**UpdateDishDto** — містить ті самі поля, але всі вони є необов'язковими, оскільки під час оновлення можна змінювати лише окремі властивості страви.

<img width="403" height="161" alt="зображення" src="https://github.com/user-attachments/assets/954c591b-c1be-462d-a6d4-20be5db2e44f" />


### 2. DishesService

Створено сервіс `DishesService`, який відповідає за роботу з даними.

Для зберігання інформації використовується масив об'єктів у пам'яті. Спочатку він містить дві страви:

- Піца Маргарита;
- Бургер.

У сервісі реалізовано такі методи:

- `findAll()` — отримання всіх страв;
- `findOne(id)` — пошук страви за ідентифікатором;
- `create(dto)` — створення нової страви з унікальним ідентифікатором;
- `update(id, dto)` — оновлення інформації про страву;
- `remove(id)` — видалення страви.

Якщо страва з указаним ідентифікатором не знайдена, генерується виняток `NotFoundException` з HTTP-статусом 404.

### 3. DishesController

Контролер `DishesController` відповідає за обробку HTTP-запитів до ресурсу `/dishes`.

Для виконання операцій контролер використовує впроваджений сервіс `DishesService` та передає йому необхідні дані.

## Реалізовані REST-ендпоінти

| HTTP-метод | URL | Призначення | Статус |
|---|---|---|---|
| GET | `/dishes` | Отримання всіх страв | 200 OK |
| GET | `/dishes/:id` | Отримання страви за ID | 200 OK |
| POST | `/dishes` | Створення нової страви | 201 Created |
| PATCH | `/dishes/:id` | Оновлення страви | 200 OK |
| DELETE | `/dishes/:id` | Видалення страви | 204 No Content |

## Тестування API

Тестування виконувалося за допомогою розширення Thunder Client у Visual Studio Code.

### 1. Отримання всіх страв (GET)

Запит:

```http
GET http://localhost:3000/dishes
```

Результат: отримано список усіх страв зі статусом `200 OK`.

<img width="974" height="536" alt="зображення" src="https://github.com/user-attachments/assets/449948ea-9eb9-42bf-855e-f0850dec05cf" />


### 2. Отримання страви за ID (GET)

Запит:

```http
GET http://localhost:3000/dishes/1
```

Результат: отримано інформацію про страву з ідентифікатором `1`.

<img width="974" height="346" alt="зображення" src="https://github.com/user-attachments/assets/c9e5fb5a-9a7d-4168-ae89-bd622d8720f9" />


### 3. Створення нової страви (POST)

Запит:

```http
POST http://localhost:3000/dishes
```

Тіло запиту:

```json
{
  "title": "Суші",
  "price": 350,
  "weightGrams": 400,
  "calories": 500,
  "isSpicy": true
}
```

Результат: нову страву успішно створено, їй присвоєно унікальний ідентифікатор. Статус відповіді — `201 Created`.

<img width="974" height="407" alt="зображення" src="https://github.com/user-attachments/assets/8f56bdda-e22e-4f39-b1b2-94d6b2e78771" />


### 4. Оновлення страви (PATCH)

Запит:

```http
PATCH http://localhost:3000/dishes/1
```

Тіло запиту:

```json
{
  "price": 250
}
```

Результат: ціну страви успішно змінено з 220 на 250. Інші властивості залишилися без змін.

<img width="974" height="327" alt="зображення" src="https://github.com/user-attachments/assets/aaa408de-284a-4355-b3f7-fa7e4777c6ab" />


### 5. Видалення страви (DELETE)

Запит:

```http
DELETE http://localhost:3000/dishes/1
```

Результат: страву успішно видалено. Сервер повернув статус `204 No Content`.

<img width="974" height="291" alt="зображення" src="https://github.com/user-attachments/assets/5a8753ca-8ce6-47eb-8018-c752425590f5" />

<img width="974" height="563" alt="зображення" src="https://github.com/user-attachments/assets/7be28242-56e8-415c-ac5e-2c332f298997" />




### 6. Перевірка обробки помилок 

Запит:

```http
GET http://localhost:3000/dishes/999
```

Результат: оскільки страви з таким ідентифікатором не існує, сервер повернув статус та відповідне повідомлення про помилку.

<img width="974" height="281" alt="зображення" src="https://github.com/user-attachments/assets/d45454a7-e613-45a2-befd-10737db8d0f0" />



## Висновок

Під час виконання практичної роботи було створено REST API за допомогою фреймворку NestJS. Реалізовано контролер, сервіс та DTO для роботи з ресурсом страв.

Було розроблено основні HTTP-ендпоінти для отримання, створення, оновлення та видалення даних. Також реалізовано обробку ситуацій, коли запитувана страва не існує.

Усі реалізовані операції перевірено за допомогою Thunder Client. У результаті роботи отримано практичні навички розроблення REST API, використання HTTP-мет
