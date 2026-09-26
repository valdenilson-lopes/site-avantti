@echo off
setlocal
title Publicar alteracoes - Site Avantti

cd /d "D:\Desenvolvimento WEB\site-avantti"

echo.
echo ============================================
echo     PUBLICAR ALTERACOES - SITE AVANTTI
echo ============================================
echo.

git status
echo.

set /p commitmsg=Informe o nome do commit: 

if "%commitmsg%"=="" (
    echo.
    echo Nome do commit nao pode ficar vazio.
    pause
    exit /b 1
)

echo.
echo Adicionando arquivos...
git add -A

echo.
echo Criando commit...
git commit -m "%commitmsg%"

if errorlevel 1 (
    echo.
    echo Nenhum commit foi criado. Pode nao haver alteracoes pendentes.
    echo Verifique o status abaixo:
    git status
    pause
    exit /b 1
)

echo.
echo Enviando para o GitHub...
git push

if errorlevel 1 (
    echo.
    echo ERRO ao enviar para o GitHub.
    echo Verifique sua conexao, autenticacao ou configuracao do repositorio.
    pause
    exit /b 1
)

echo.
echo ============================================
echo   ALTERACOES PUBLICADAS COM SUCESSO
echo ============================================
echo.
echo A Vercel deve iniciar um novo deploy automaticamente.
echo.

pause
endlocal
