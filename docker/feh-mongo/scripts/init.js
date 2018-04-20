conn = new Mongo();
admin = conn.getDB("admin");
// admin.auth( 'admin', 'admin' );

admin.createUser(
    {
        user: 'admin',
        pwd: 'admin',
        roles: [{
            role: 'userAdminAnyDatabase',
            db: 'admin'
        }, {
            role: 'readWriteAnyDatabase',
            db: 'admin'
        }]
    });

admin.auth('admin', 'admin');
feh = admin.getSiblingDB('feh');
feh.createCollection('heroes');
feh.createCollection('skill');

admin.createUser(
    {
        user: 'fehworker',
        pwd: 'feh',
        roles: [{
            role: 'readWrite',
            db: 'feh'
        }]
    });

