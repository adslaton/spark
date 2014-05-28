var Cylon = require('cylon'),
    cfg = require('./cfg')('local');

Cylon.api({ host: cfg.host, port: cfg.port });

// Initialize the robot
Cylon.robot({
    connection: { 
        name: cfg.name,
        adaptor: cfg.adaptor,
        accessToken: cfg.accessToken,
        deviceId: cfg.deviceId,
        module: cfg.module
    },
    device: { 
        name: 'led',
        driver: 'led',
        pin: 'D7'
    },

    work: function(my) {
        var date;

        every((5).second(), function() {
            date = new Date();
            my.led.toggle();
            console.log('%s %s', my.name, date);
        });
    }
}).start();