# Invoice Management API

Este repositorio contiene una API para la gestión de facturas. A continuación, se detallan los pasos para configurar y usar el entorno de desarrollo.

![image](https://github.com/Fmasgrau/abmfacturacion/assets/40182366/376ebdbb-10be-446d-aad6-ce268f2903f8)

## Requisitos Previos

- Docker y Docker Compose instalados.
- Postman para probar los endpoints de la API.

## Instrucciones de Instalación

1. **Descargar el repositorio:** Clona el repositorio utilizando el siguiente comando:

       git clone https://github.com/Fmasgrau/abmfacturacion.git

2. **Crear un archivo .env:** Crea un archivo **.env** en la raíz del proyecto con las siguientes configuraciones (ajusta los valores según sea necesario):

**Te dejo un ejemplo de uso:**

    DB_HOST=localhost

    DB_USER=postgres 

    DB_PASSWORD=admin123 

    DB_NAME=invoice_db 

    DB_PORT=5432 

    JWT_SECRET=bienvenidoApayana 

    SERVER_PORT=3000

3. **Colocar el archivo SQL:** Asegúrate de colocar el archivo **sql.db** dentro de la carpeta principal del proyecto para configurar la base de datos.
4. **Iniciar Docker:** Utiliza Docker Compose para levantar los servicios en segundo plano:

        docker-compose up -d 

5. **Inicializar el ambiente de desarrollo:** Una vez que Docker esté funcionando, el ambiente de desarrollo estará listo para usarse.

# Uso de la API

6. **Documentación de Postman:**
   
   Encontrarás la documentación de Postman y las variables de entorno necesarias en la carpeta **docs**. Consulta esta documentación para entender los endpoints disponibles y sus respuestas. Además, puedes utilizar la función "View Documentation" en Postman para obtener más detalles sobre cómo utilizar cada función de la API.
8. **Autenticación:**
    Esta aplicación requiere autenticación. Deberás:
     + Crear un usuario mediante el endpoint **Create User** dentro de la sección **users**.
      + Realizar login con el correo electrónico y la contraseña del usuario creado. Esto te proporcionará un token que Postman guardará automáticamente en las variables de entorno, permitiéndote acceder a los demás endpoints de la API.
  
## Instrucciones de Instalación de manera local
En caso de querer correr el proyecto localmente y la base de datos en docker deberías seguir los siguientes pasos:

1.**Seguir pasos 1,2 y 3 del apartado Instrucciones de instalación**

2.**Iniciar la base de datos en docker**
   
        docker-compose up -d db

3.**Instalar las dependencias**

       yarn add
       
4.**Una vez instaladas**

  Correr el comando para levantar el entorno en desarrollo:
  
      yarn dev
      
  Correr el comando para levantar el entorno de test:
  
      yarn test

5.**Ir a Uso de la API**


Cualquier duda o inquietud puedes contactarme a **facundomasgrau@gmail.com**

