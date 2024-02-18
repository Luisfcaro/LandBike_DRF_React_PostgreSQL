# LandBike

LandBike ofrece un servicio de alquiler de bicicletas eficiente y sostenible, aprovechando tecnologías de vanguardia como React.js, Django Rest Framework, Postgres, Bootstrap, y Docker.

## 🌟 Características Destacadas

- **Interfaz Intuitiva**: Implementada con React.js para asegurar una navegación fluida.
- **Servicios Backend**: Desarrollados con Django Rest Framework para una gestión eficaz de datos.
- **Gestión de Datos**: Postgres se encarga de almacenar información de manera segura.
- **Diseño Responsive**: Utilizamos Bootstrap para una estética moderna y adaptable.
- **Contenedores Docker**: Facilita el despliegue y manejo de entornos gracias a Docker.

## 🛠 Requisitos para el Entorno de Desarrollo

Es necesario contar con:

- Node.js y npm (necesarios para React.js)
- Docker

## 📦 Docker Compose Setup

El `docker-compose.yml` facilita la orquestación de servicios para la aplicación:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres
    container_name: postgres_container
    environment:
      POSTGRES_USER: luis
      POSTGRES_PASSWORD: 178aj900
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./postgresql/init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    restart: always

  backend:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: backend_container
    volumes:
      - .:/app
    ports:
      - "8000:8000"
    environment:
      - PG_USER=luis
      - PG_PASSWORD=178aj900
      - PG_DB=landbike
      - PG_PORT=5432
      - PG_HOST=postgres
    depends_on:
      - postgres
    restart: unless-stopped

  frontend:
    build:
      context: ./Frontend
      dockerfile: Dockerfile
    container_name: frontend_container
    ports:
      - "5173:5173"
    restart: always

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin4_container
    environment:
      PGADMIN_DEFAULT_EMAIL: 'admin@admin.com'
      PGADMIN_DEFAULT_PASSWORD: 'root'
    ports:
      - "5050:80"
    depends_on:
      - postgres
    restart: always

volumes:
  postgres_data:
```

## 🚀 Instrucciones de Instalación
Para desplegar LandBike en tu entorno local, sigue estos pasos:

Clone el repositorio: 
```
git clone https://github.com/Luisfcaro/LandBike_DRF_React_PostgreSQL.git
```

Cambie al directorio del proyecto: 
```
cd LandBike_DRF_React_PostgreSQL
```

Seleccione la rama adecuada:
```
git checkout -t origin/main_docker_compose
```

Instale las dependencias necesarias para el frontend:
```
cd ./Frontend && npm install
```

## 🖥 Ejecución
Nota: El proyecto se encuentra en una fase beta, lo que podría limitar algunas funcionalidades.

Para iniciar la aplicación:

Ejecute Docker Compose (Esto debe realizarse en la carpeta Raíz del proyecto): 
```
docker-compose up --build
```

Acceda a la interfaz principal a través de localhost:5173 y explore las diferentes secciones de la página web.

## 💡 ¿Cómo Contribuir?
Tus ideas y sugerencias son valiosas para nosotros. Si tienes propuestas de mejora o encuentras algún problema, no dudes en abrir un issue o enviar un pull request.

Este formato mantiene toda la información esencial del proyecto y su configuración, presentada de manera clara y estructurada para facilitar su lectura y comprensión. Se han hecho pequeñas adaptaciones para mejorar la legibilidad y la apariencia visual del documento, siguiendo las convenciones de archivos Markdown para GitHub.



