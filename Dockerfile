# Usar la imagen base de Node.js
FROM node:20.10.0

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Compilar TypeScript
RUN npm run build

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]
