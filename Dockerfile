# Використовуйте офіційний образ Node.js
FROM node:14

# Створіть робочий каталог в контейнері
WORKDIR /app

# Скопіюйте файли проєкту у контейнер
COPY package.json package-lock.json ./

# Встановіть залежності
RUN npm install

# Скопіюйте всі інші файли проєкту
COPY . .

# Запустіть тест в контейнері
CMD ["npx", "test.spec.ts"]