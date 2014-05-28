var Cylon = require('cylon');

// Initialize the robot
Cylon.robot({
  connection: { 
  	name: 'voodoospark',
  	adaptor: 'voodoospark',
  	accessToken: 'd0cd55e3561e33ab435409d4605c3b54b6a896b0',
  	deviceId: '55ff6d065075555349521687',
  	module: 'spark' 
  },
  device: { 
  	name: 'led',
  	driver: 'led',
  	pin: 'D0'
  },

  work: function(my) {
    every((1).second(), function() {my.led.toggle()});
  }
}).start();