# Використовуйте офіційний образ Node.js
FROM node:14

# Встановіть додаткові залежності, такі як Chromium
RUN apt-get update && apt-get install -y \
  chromium \
  && rm -rf /var/lib/apt/lists/*

# Створіть та встановіть каталог робочого проекту
WORKDIR /app

# Скопіюйте package.json та package-lock.json та встановіть залежності
COPY package*.json ./
RUN npm install

# Скопіюйте решту файлів вашого проекту в контейнер
COPY . .

# Запустіть ваші тести в Docker-контейнері
CMD ["npm", "test"]
