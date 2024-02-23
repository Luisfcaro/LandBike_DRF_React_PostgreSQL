# Primera etapa: construir la aplicación
FROM python:3 AS builder

# Establecer salida sin búfer para Python
ENV PYTHONUNBUFFERED 1

# Instalar cliente PostgreSQL y los módulos Perl requeridos
RUN apt-get update && apt-get install -y postgresql-client libdbd-pg-perl

# Crear directorio de la aplicación
WORKDIR /app

# Instalar las dependencias de la aplicación
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Agrupar el código fuente de la aplicación
COPY . .

# Segunda etapa: crear la imagen final
FROM python:3-slim

COPY --from=builder /app/requirements.txt /app_django/requirements.txt

# Instalar Django y otras dependencias necesarias
RUN apt-get update && apt-get install -y postgresql-client libdbd-pg-perl \
    && pip install --no-cache-dir -r /app_django/requirements.txt

# Crear directorio de la aplicación
WORKDIR /app_django

# Copiar solo los archivos necesarios de la etapa de construcción
COPY --from=builder /app /app_django

COPY django_script.sh .
COPY wait-for-postgres.sh .

# Establecer permisos ejecutables para los scripts
RUN chmod +x /app_django/django_script.sh
RUN chmod +x /app_django/wait-for-postgres.sh

# Exponer puerto
EXPOSE 8000

# Entrypoint para ejecutar el archivo django.sh
# ENTRYPOINT ["/bin/sh", "/app_django/django_script.sh"]
# CMD ["/bin/sh", "/app_django/django_script.sh"]