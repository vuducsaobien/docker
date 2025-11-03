https://docs.docker.com/engine/network/
    Xoá tất cả các Container, Images, Volumes, Build = file command.txt (1,2,3,4,5)
    When Docker Engine on Linux starts for the first time, 
    it has a single built-in network called the "default bridge" network. 
    When you run a container without the --network option, it is connected to the default bridge.

    Containers attached to the default bridge have access to network services outside the Docker host. 
    They use "masquerading" which means, if the Docker host has Internet access, 
    no additional configuration is needed for the container to have Internet access.

    For example, to run a container on the default bridge network, and have it ping an Internet host:


    