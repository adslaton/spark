var Cylon = require('cylon');

// Start the Cylon api
Cylon.api(
    {
        host: '127.0.0.1',
        port: '3000',
        cert: '',
        key: '',
        auth: {
            type: 'basic',
            user: 'admin',
            pass: 'pass'
        }
    }
);

// Initialize the robot
Cylon.robot({
    connection: { 
        name: 'voodoospark',
        adaptor: 'voodoospark',
        accessToken: '5f74fccbbb85f0516dda03273e45725f2c9bd26e',
        deviceId: '55ff6d065075555349521687',
        module: 'spark' 
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