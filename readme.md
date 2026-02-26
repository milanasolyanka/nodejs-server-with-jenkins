**Че запускаем?**

`https://github.com/milanasolyanka/nodejs-server/tree/lab3`

лаба 3, потому что там, какие-то таймауты и оно вроде не падает

там rabbitmq, nginx, два мс.

**Билдим образ**

```
docker build -t my-jenkins .
```

**Запускаем контейнер**

```
docker run -d -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -v //var/run/docker.sock:/var/run/docker.sock --name jenkins my-jenkins
```
!!!!!!!!!!!!!ПУТЬ К СОКЕТУ НЕ МЕНЯТЬ!!!!!!!!!!!!!!!!

**Пароль**
6656f6c9d447464e916d4d84edbdd765

**первый админ юзер**
admin - admin
