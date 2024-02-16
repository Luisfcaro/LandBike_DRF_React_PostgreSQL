CREATE DATABASE landbike;


\c landbike;

-- Crear un usuario y asignarle privilegios
-- CREATE USER luis WITH PASSWORD '178aj900';
ALTER ROLE luis SET client_encoding TO 'utf8';
ALTER ROLE luis SET default_transaction_isolation TO 'read committed';
ALTER ROLE luis SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE landbike TO luis;