# Проєкт автоматизації тестів для Wikipedia

## Опис

Цей проєкт створений для автоматизації тест-кейсу "Зміна мови інтерфейсу в 'Wikipedia' авторизованим користувачем."

## Тест-кейс

### Назва тест-кейсу: Зміна мови інтерфейсу в 'Wikipedia' авторизованим користувачем

Тест-кейс полягає в тому, щоб автоматизовано змінити мову інтерфейсу веб-додатка "Wikipedia" для авторизованого користувача. Детальний опис та реалізація тесту наведені в [test.spec.ts].

### Попередні умови:

Користувач повинен бути авторизованим на веб-додатку "Wikipedia".
Користувач повинен мати доступ до розділу "Preferences".

### Кроки:

1. Увійдіть на веб-додаток "Wikipedia" як авторизований користувач.
2. Натисніть на свій профіль або ім'я користувача у верхньому правому куті екрану.
3. Зі списку випадаючих пунктів виберіть "Preferences".
4. У вікні налаштувань перейдіть на вкладку "User profile".
5. Знайдіть розділ "Internationalisation" або аналогічний іншомовний розділ, який дозволяє вибрати мову інтерфейсу.
Виберіть нову мову інтерфейсу зі списку доступних мов.
6. Збережіть зміни (зазвичай це можна зробити натиснувши кнопку "Зберегти").

### Очікуваний результат:
Після збереження змін, інтерфейс додатка "Wikipedia" повинен відображатися обраною користувачем мовою.

### Перевірка:
Перевірте, чи зміни в мові інтерфейсу були успішно збережені.
Перевірте, чи весь інтерфейс додатка "Wikipedia" відображається обраною користувачем мовою.
Переконайтеся, що текст та елементи інтерфейсу правильно перекладені та відображаються.
Переконайтеся, що зміни мови не вплинули на користувацькі налаштування та дані.
Переконайтеся, що користувач може без проблем користуватися додатком на новій мові інтерфейсу.

### Відзначка:
Якщо тест-кейс успішно пройдений, відзначте його як пройдений і вкажіть час виконання тесту.

У випадку неспівпадіння фактичних та очікуваних результатів, зареєструйте деталі помилок та зв'яжіться з командою розробників для виправлення проблеми.
