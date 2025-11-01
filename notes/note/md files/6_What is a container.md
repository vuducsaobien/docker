- Xoá tất cả các Container, Images, Volumes, Build = file command.txt (1,2,3,4,5)
- Đảm bảo tất cả tab (Container, Images, Volumes, Build) đều trôngs trước khi làm issue này.

- Xem lại (command.txt command 6 + 7)
    docker network ls
        NETWORK ID     NAME      DRIVER    SCOPE
        5fe5907c34ed   bridge    bridge    local
        0efb45f24983   host      host      local
        d99401f9cabb   none      null      local

    docker system df -v
        Images space usage:
        REPOSITORY   TAG       IMAGE ID   CREATED   SIZE      SHARED SIZE   UNIQUE SIZE   CONTAINERS

        Containers space usage:
        CONTAINER ID   IMAGE     COMMAND   LOCAL VOLUMES   SIZE      CREATED   STATUS    NAMES

        Local Volumes space usage:
        VOLUME NAME   LINKS     SIZE

        Build cache usage: 0B
        CACHE ID   CACHE TYPE   SIZE      CREATED   LAST USED   USAGE     SHARED

    Tạo container từ image:
        - docker run -d -p 8080:80 docker/welcome-to-docker

    docker ps
        CONTAINER ID   IMAGE                      COMMAND                  CREATED         STATUS         PORTS                                     NAMES
        46c36c75b0f9   docker/welcome-to-docker   "/docker-entrypoint.…"   9 minutes ago   Up 9 minutes   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   strange_cerf

    => Vào http://localhost:8080 => hiện ra trang web
        Congratulations!!!
            You ran your first container.