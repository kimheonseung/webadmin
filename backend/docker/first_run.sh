#! /bin/sh

CURRENT_DIR=$PWD

mkdir -p ./mariadb/data
chmod -R 777 ./mariadb

docker network create webadmin_node-network
docker-compose up -d
