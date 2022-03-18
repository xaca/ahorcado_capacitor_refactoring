# ahorcado_capacitor_refactoring
Proyecto refactoring para la creación de una aplicación híbrida usando capacitor, un framework que es soportado por Ionic y que es compatible con phonegab/cordova

## Instrucciones

1. Ingrese a la carpeta dev
2. Ejecute el comando npm i, para instalar las dependencias del proyecto
3. Ejecute gulp build para crear el archivo www
4. Ejecute el comando npm install @capacitor/core
5. Ejecute el comando npm install @capacitor/cli --save-dev
6. Inicialice el proyecto con npx cap init
7. Le va a pedir la carpeta del proyecto final que es www
8. Debe ingresar el nombre de la aplicación por ejemplo: Hola Mundo Capacitor
9. Debe ingresar el nombre de paquete único, ejemplo: co.edu.upb.HolaMundoCapacitor
10. Instale la plataforma de android para capacitor npm install @capacitor/android
11. Agregue la plataforma, npx cap add android, se creará el proyecto de android copiando lo que esta en www a una carpeta publica de la estructura de archivos de la aplicación
12. Abra android studio npx cap open android, verifique que este actualizado

## Notas

- La carpeta www, se puede configurar en la variable destino que esta en el gulp file, dentro de la carpeta dev
