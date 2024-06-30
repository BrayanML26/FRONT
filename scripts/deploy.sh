#!/bin/bash

echo "Deploying application..."

# Instalación de dependencias adicionales (si es necesario)
# Ejemplo: npm install -g some-package

# Construir la aplicación
npm run build

# Ejecutar pruebas adicionales (opcional)
# npm test

# Detener la aplicación actual (si está corriendo)
# Ejemplo: pm2 stop my-app

# Copiar los archivos construidos a tu servidor de producción
# Ejemplo: rsync -avz --delete ./dist/ user@server:/path/to/app

# Iniciar la aplicación en el servidor de producción
# Ejemplo: pm2 start my-app

echo "Deployment completed successfully."
