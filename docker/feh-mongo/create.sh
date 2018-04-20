docker run -d -p 27017:27017 --name feh-mongo mongo --auth
sleep 2

docker cp ./scripts/init.js feh-mongo:/
docker exec -it feh-mongo mongo /init.js
