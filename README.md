**Invoice Management API**

Este repositorio contiene una API para la gestión de facturas. A continuación, se detallan los pasos para configurar y usar el entorno de desarrollo.

**Requisitos Previos**

- Docker y Docker Compose instalados.
- Postman para probar los endpoints de la API.

**Instrucciones de Instalación**

1. **Descargar el repositorio:** Clona el repositorio utilizando el siguiente comando:

git clone https://github.com/Fmasgrau/abmfacturacion.git

1. **Crear un archivo .env:** Crea un archivo **.env** en la raíz del proyecto con las siguientes configuraciones (ajusta los valores según sea necesario):

**Te dejo un ejemplo de uso:**

DB\_HOST=localhost 

DB\_USER=postgres 

DB\_PASSWORD=admin123 

DB\_NAME=invoice\_db 

DB\_PORT=5432 

JWT\_SECRET=bienvenidoApayana 

1. **Colocar el archivo SQL:** Asegúrate de colocar el archivo **sql.db** dentro de la carpeta principal del proyecto para configurar la base de datos.
1. **Iniciar Docker:** Utiliza Docker Compose para levantar los servicios en segundo plano:

docker-compose up -d 

1. **Inicializar el ambiente de desarrollo:** Una vez que Docker esté funcionando, el ambiente de desarrollo estará listo para usarse.

**Uso de la API**

6. **Documentación de Postman:** Encontrarás la documentación de Postman y las variables de entorno necesarias en la carpeta **docs**. Consulta esta documentación para entender los endpoints disponibles y sus respuestas. Además, puedes utilizar la función "View Documentation" en Postman para obtener más detalles sobre cómo utilizar cada función de la API.
6. **Autenticación:** Esta aplicación requiere autenticación. Deberás:
   1. Crear un usuario mediante el endpoint **Create User** dentro de la sección **users**.
   1. Realizar login con el correo electrónico y la contraseña del usuario creado. Esto te proporcionará un token que Postman guardará automáticamente en las variables de entorno, permitiéndote acceder a los demás endpoints de la API.

