@REM reset-git-history.bat
@echo off
echo Creando nueva rama temporal sin historial...
git checkout --orphan temp

echo Agregando todos los archivos actuales...
git add .

echo Realizando commit inicial...
git commit -m "Estado inicial"

echo Eliminando rama principal...
git branch -D main

echo Renombrando rama temporal a main...
git branch -m main

echo Forzando push al remoto...
git push -f origin main

echo Configurando el upstream de la rama main...
git branch --set-upstream-to=origin/main main

echo Proceso completado.
pause
