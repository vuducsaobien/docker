- Xoá tất cả các Container, Images, Volumes, Build = file command.txt (1,2,3,4,5)
    docker ps -aq | xargs -r docker rm -f
    docker images -aq | xargs -r docker rmi -f
    docker volume ls -q | xargs -r docker volume rm -f
    docker network ls | grep -v "bridge\|host\|none" | awk '{print $1}' | xargs -r docker network rm

- docker run ubuntu:24.04
    Kiểm tra: docker system df -v

    Images space usage:
        REPOSITORY   TAG       IMAGE ID       CREATED       SIZE      SHARED SIZE   UNIQUE SIZE   CONTAINERS
        ubuntu       24.04     66460d557b25   4 weeks ago   139MB     0B            139.2MB       1

    Containers space usage:
        CONTAINER ID   IMAGE          COMMAND       LOCAL VOLUMES   SIZE      CREATED              STATUS                          NAMES
        a2acab562a7e   ubuntu:24.04   "/bin/bash"   0               4.1kB     About a minute ago   Exited (0) About a minute ago   elegant_wu

- Xoá tất cả các Container, Images, Volumes, Build = file command.txt (1,2,3,4,5)
    docker ps -aq | xargs -r docker rm -f
    docker images -aq | xargs -r docker rmi -f

    - docker run ubuntu
    Kiểm tra: docker system df -v

    Images space usage:
        REPOSITORY   TAG       IMAGE ID       CREATED       SIZE      SHARED SIZE   UNIQUE SIZE   CONTAINERS
        ubuntu       latest    66460d557b25   4 weeks ago   139MB     0B            139.2MB       1

    Containers space usage:
        CONTAINER ID   IMAGE     COMMAND       LOCAL VOLUMES   SIZE      CREATED          STATUS                      NAMES
        64358141fc65   ubuntu    "/bin/bash"   0               4.1kB     28 seconds ago   Exited (0) 27 seconds ago   tender_matsumoto

=> Sự khác nhau giữa `docker run ubuntu:24.04` & `docker run ubuntu`
    Vào Docker Hub để kiểm tra images: https://hub.docker.com/_/ubuntu#supported-tags-and-respective-dockerfile-links
    => Thấy có tag 24.04 & latest

- Image digests (Ít dùng)
    - docker run alpine@sha256:9cacb71397b640eca97488cf08582ae4e4068513101088e9f96c9814bfda95e0 date

    => Muốn lấy digests của 1 Image thì .. gọi các API trong folder Registry của Docker Hub Postman

- Foreground and background (Không quan trọng)
    Docker có 2 chế độ chạy container: 
    | Loại         | Tên gọi                | Cách chạy                                   | Ví dụ lệnh                        | Khi chạy xong thì sao                   |
    |--------------|------------------------|---------------------------------------------|-----------------------------------|-----------------------------------------|
    | Foreground   | (Chạy ở “tiền cảnh”)   | Container chiếm terminal                    | `docker run nginx`                | Container dừng khi bạn thoát terminal   |
    |              |                        | , bạn thấy output trực tiếp                 | hoặc `docker run -it alpine sh`   |                                         |
    | ------------ | ---------------------- | ------------------------------------------- | --------------------------------- | --------------------------------------- |
    | Background   | (Chạy ở “hậu cảnh”)    | Container chạy ngầm, không chiếm terminal   | `docker run -d nginx`             | Container tiếp tục chạy,                |
    |              |                        |                                             |                                   |                                         |
    |--------------|------------------------|---------------------------------------------|-----------------------------------|-----------------------------------------|

    When you start a container, the container runs in the `foreground` by default.
    If you want to run the container in the background instead, 
    you can use the `--detach` (or -d) flag. 
    This starts the container without occupying your terminal window.
        `docker run -d IMAGE`

    `docker run --name container_nginx     nginx`
    `docker run --name container_ubuntu -d ubuntu`

    docker pull nginx
    docker run --name nginx_container nginx (Chạy 1 container name=nginx_container từ image nginx)
    
    docker logs -n 5 nginx_container
    docker attach nginx_container

