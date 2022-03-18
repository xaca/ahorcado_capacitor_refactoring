# Configuración proyecto

Proyecto refactoring para la creación de una aplicación híbrida usando capacitor, un framework que es soportado por Ionic y que es compatible con phonegab/cordova

## Instalación herramientas

- Instalación y configuración comando npx (herramienta de node en windows)
- Instalación comando cap (Capacitor)
- Configuración proyecto base
- Configuración de proyecto android
- Configuración de flujo de trabajo

### Instalación y configuración comando npx (herramienta de node en windows)

#### Requerimientos

- Python versión 2.7
- Última versión de node y npm
- Visual Studio 2017 Community
- Node-gyp
- Android Studio

## Instrucciones

1. Ejecute el comando npm i, para instalar las dependencias del proyecto
2. Ejecute gulp bulde para crear el archivo bundle
3. Ejecute el comando npm install @capacitor/core
4. Ejecute el comando npm install @capacitor/cli --save-dev
5. Inicialice el proyecto con npx cap init
6. Le va a pedir la carpeta del proyecto final que es bundle
7. Debe ingresar el nombre de la aplicación por ejemplo Hola Mundo Capacitor
8. Debe ingresar el nombre de paquete único, puede ser co.edu.upb.HolaMundoCapacitor
9. Instale la plataforma de android para capacitor npm install @capacitor/android
10. Agregue la plataforma, npx cap add android, se creará el proyecto de android copiando lo que esta en bundle a una carpeta publica de la estructura de archivos de la aplicación
11. Abra android studio npx cap open android, verifique que este actualizado

## Referencias

- [Getting starte capacitor](https://capacitorjs.com/docs/getting-started)
- [node-gyp](https://github.com/nodejs/node-gyp)
- [NPX not found](https://stackoverflow.com/questions/49894620/npx-command-not-found)
- [NPX issues](https://github.com/zkat/npx/issues/146)
- [Cordova vs Capacitor](https://ionicframework.com/resources/articles/capacitor-vs-cordova-modern-hybrid-app-development)
- [Visual Studio Community 2017](https://visualstudio.microsoft.com/es/vs/older-downloads/)
- [Python 2.7](https://www.python.org/downloads/)
- [Android studio](https://developer.android.com/studio)
