# Utilizar node:20-alpine como base
FROM node:20-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app/frontend

# Copiar los archivos de package.json y package-lock.json
COPY package*.json /app/frontend/

# Instalar dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
COPY . /app/frontend

# Exponer el puerto 5173
EXPOSE 5173

# Comando para arrancar la aplicación
CMD ["npm", "run", "dev"]
