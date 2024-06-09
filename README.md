# Run Node API

1. Run Migration
- `npx sequelize-cli db:migrate`

2. Run Seeder
- `npx sequelize db:seed --seed nameofseeder`

 - Example : 
    `npx sequelize db:seed --seed 20240609013355-todo-seeder.js`

3. Run Unit Test
- `npm run test`


# Docker Part

1. Build

`docker build -t simple-todo-api .`

2. Run

`docker compose up`

3. Exec Into Container

`docker exec -it <<container-id>> sh`

Example : `docker exec -it 4ec7e30f126c sh`

## Run Into Container with Docker

> 1. Run app by `docker composer up`
> 2. Checking container id with command `docker container ls`
> 3. Using container id for exec with using this command `docker exec -it <<container-id>> sh`
> 4. You can run sequelize for migrate / run seed in docker container
> 5. If any changes in code you must re build (run command docker build) and execute `docker compose up again`


