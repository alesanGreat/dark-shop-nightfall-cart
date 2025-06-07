@echo off
setlocal EnableDelayedExpansion

:: Verificar privilegios de administrador
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo Elevando privilegios...
    if exist "%~dp0elevate.exe" (
        "%~dp0elevate.exe" -c %0 %*
    ) else (
        echo elevate.exe no encontrado en el directorio actual.
        echo Por favor, asegurate de que elevate.exe este en el mismo directorio que este script.
        pause
        exit /b 1
    )
    exit /b
)

:: Obtener el nombre de la carpeta actual
for %%a in ("%cd%") do set "foldername=%%~nxa"

:: Configurar la fecha y hora para el nombre del archivo usando PowerShell
for /f "tokens=*" %%a in ('powershell -Command "Get-Date -Format 'yyyy-MM-dd--HH-mm'"') do set "datetime=%%a"

:: Crear carpeta backups si no existe
if not exist "backups" mkdir backups

:: Incluir el nombre de la carpeta en el nombre del backup
set "backupname=backups\%foldername%-AppBackup-%datetime%.zip"

:: Buscar 7-Zip en Program Files
if exist "%ProgramFiles%\7-Zip\7z.exe" (
    set "zip=%ProgramFiles%\7-Zip\7z.exe"
) else if exist "%ProgramFiles(x86)%\7-Zip\7z.exe" (
    set "zip=%ProgramFiles(x86)%\7-Zip\7z.exe"
) else (
    echo 7-Zip no encontrado. Descargando e instalando...
    powershell -Command "(New-Object System.Net.WebClient).DownloadFile('https://www.7-zip.org/a/7z2301-x64.exe', '7z-install.exe')"
    7z-install.exe /S
    set "zip=%ProgramFiles%\7-Zip\7z.exe"
    del 7z-install.exe
)

:: Crear archivo temporal de exclusiones
(
    echo node_modules
    echo Backups
    echo otros
    echo project_files.txt
    echo ignore_items.txt
    echo __pycache__
    echo log
    echo .git
    echo .yarn
    echo dist
    echo .next
) > ignore_items.txt

:: Crear el archivo ZIP con el nombre que incluye la carpeta actual
"%zip%" a -tzip "%backupname%" "." -xr@ignore_items.txt

:: Limpiar
del ignore_items.txt

echo Backup creado: %backupname%
pause 