# NGINX Classic + PHP-FPM Setup cho Laravel

Cấu hình Docker với NGINX Classic và PHP-FPM để chạy ứng dụng Laravel.

## Cấu trúc

```
docker/nginx-classic/
├── Dockerfile.nginx      # Dockerfile cho NGINX
├── Dockerfile.php-fpm    # Dockerfile cho PHP-FPM với các extension Laravel
├── nginx.conf            # Cấu hình NGINX cho Laravel
└── README.md             # File này
```

## Cách sử dụng

1. **Build và chạy containers:**
   ```bash
   docker compose up -d --build
   docker compose -p docker_service up -d --build
   ```

2. **Cài đặt dependencies (nếu chưa có):**
   ```bash
   docker compose exec php-fpm composer install
   ```

3. **Tạo file .env và cấu hình database:**
   ```bash
   docker compose exec php-fpm cp .env.example .env
   ```
   
   Hoặc chỉnh sửa `.env` trong `laravel-app/.env` với các thông tin:
   ```
   DB_CONNECTION=mysql
   DB_HOST=mysql
   DB_PORT=3306
   DB_DATABASE=laravel
   DB_USERNAME=laravel
   DB_PASSWORD=secret
   ```

4. **Generate application key:**
   ```bash
   docker compose exec php-fpm php artisan key:generate
   ```

5. **Chạy migrations:**
   ```bash
   docker compose exec php-fpm php artisan migrate
   ```

6. **Truy cập ứng dụng:**
   - URL: http://localhost:8080

## Services

- **nginx**: Web server, port 8080
- **php-fpm**: PHP-FPM 8.3 với các extension cần thiết cho Laravel
- **mysql**: MySQL 8.0 database

## Tài liệu tham khảo

### NGINX
- **NGINX Official Docs**: https://nginx.org/en/docs/
- **NGINX Beginner's Guide**: https://nginx.org/en/docs/beginners_guide.html
- **NGINX Configuration**: https://nginx.org/en/docs/http/ngx_http_core_module.html
- **NGINX FastCGI**: https://nginx.org/en/docs/http/ngx_http_fastcgi_module.html

### PHP-FPM
- **PHP-FPM Official Docs**: https://www.php.net/manual/en/install.fpm.php
- **PHP-FPM Configuration**: https://www.php.net/manual/en/fpm.configuration.php
- **Docker PHP Official Image**: https://hub.docker.com/_/php

### Laravel
- **Laravel Official Docs**: https://laravel.com/docs
- **Laravel Deployment**: https://laravel.com/docs/deployment
- **Laravel with Docker**: https://laravel.com/docs/sail

### Docker
- **Docker Compose Docs**: https://docs.docker.com/compose/
- **Docker Networking**: https://docs.docker.com/network/
- **Docker Volumes**: https://docs.docker.com/storage/volumes/

### Cấu hình NGINX cho Laravel
- **Laravel NGINX Config**: https://laravel.com/docs/deployment#nginx
- **NGINX Laravel Setup Guide**: https://www.nginx.com/resources/wiki/start/topics/examples/laravel/

## Các extension PHP đã cài

- `pdo_mysql`: MySQL database driver
- `intl`: Internationalization support
- `zip`: ZIP archive support
- `gd`: Image processing
- `mbstring`: Multibyte string support
- `opcache`: OPcache for performance

## Troubleshooting

### Kiểm tra logs
```bash
# NGINX logs
docker compose logs nginx

# PHP-FPM logs
docker compose logs php-fpm

# MySQL logs
docker compose logs mysql
```

### Vào container để debug
```bash
# Vào PHP-FPM container
docker compose exec php-fpm bash

# Vào NGINX container
docker compose exec nginx sh

# Vào MySQL container
docker compose exec mysql bash
```

### Kiểm tra kết nối database
```bash
docker compose exec php-fpm php artisan tinker
# Sau đó trong tinker:
DB::connection()->getPdo();
```

