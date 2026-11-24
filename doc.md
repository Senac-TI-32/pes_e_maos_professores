docker compose exec app php artisan key:generate

   ERROR  Unable to set application key. No APP_KEY variable was found in the .env file.

Solução: Abra o arquivo src/.env e Logo depois de: APP_NAME="Casa do Barista" adicione:
    APP_KEY=


Verificar as permissões:
docker compose exec app sh -lc 'ls -ld /var/www/storage /var/www/storage/framework /var/www/storage/framework/views /var/www/bootstrap/cache'

Corrigir as permissões:
docker compose exec -u root app sh -lc 'mkdir -p /var/www/storage/framework/cache /var/www/storage/framework/sessions /var/www/storage/framework/views /var/www/bootstrap/cache && chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache && chmod -R 775 /var/www/storage /var/www/bootstrap/cache'

Testar a permissão diretamente:
docker compose exec -u www-data app sh -lc 'touch /var/www/storage/framework/views/teste-permissao && rm /var/www/storage/framework/views/teste-permissao && echo "PERMISSAO OK"'

Limpar os arquivos temporários do Laravel:
docker compose exec app php artisan view:clear
docker compose exec app php artisan config:clear
docker compose exec app php artisan cache:clear
