FROM node:18

# Para oracledb si lo necesitás más adelante
RUN apt-get update && apt-get install -y libaio1

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]
