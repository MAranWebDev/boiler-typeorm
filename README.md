## Installation

**editorconfig**

- link: https://editorconfig.org/

**setup eslint**

- eslint: https://eslint.org/docs/latest/use/getting-started
- eslint-config-airbnb: https://www.npmjs.com/package/eslint-config-airbnb
- eslint-config-airbnb-base: https://www.npmjs.com/package/eslint-config-airbnb-base
- eslint-config-airbnb-typescript: https://www.npmjs.com/package/eslint-config-airbnb-typescript

**prettier**

- prettier: https://prettier.io/docs/en/install.html
- eslint-config-prettier: https://github.com/prettier/eslint-config-prettier

**typeorm**

## Instructions

**launch app**

```bash
npm run clean:all
npm run i:all
sudo docker-compose up -d server
```

**typeorm**

```bash

```

**rebuild containers to update dependencies and delete old images**

```bash
docker-compose build [--no-cache] [server | client]
docker-compose up -d [server | client]
docker image prune
```

**enter inside container**

```bash
docker-compose exec -it ${service_name} sh
```

**execute command inside container**

```bash
docker-compose exec --user=node ${service_name} sh -c "${command}"
```
