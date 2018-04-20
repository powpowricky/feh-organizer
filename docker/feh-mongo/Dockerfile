FROM mongo

EXPOSE 27017:27017

RUN ls /data/db

RUN mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db ; mongo admin --eval "db.createUser({ user: 'admin', pwd: 'admin', roles: [ { role: 'userAdminAnyDatabase', db: 'admin' } ] });"; mongod --shutdown

RUN sleep 5

RUN mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db ; mongo admin --eval "db.createUser({ user: 'admin', pwd: 'admin', roles: [ { role: 'userAdminAnyDatabase', db: 'admin' } ] });"; mongod --shutdown

RUN sleep 5

