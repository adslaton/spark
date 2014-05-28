'use strict';

var config = {
    local: {
        host:           'localhost',
        port:           '3000',
        accessToken:    'YOUR_ACCESS_TOKEN',
        deviceId:       'YOUR_DEVICE_ID',
        name:           'voodoospark',
        adaptor:        'voodoospark',
        module:         'spark' 
    }
};

/**
 * @module Config
 * @memberof SPARK
 * @desc Manages all the configuration per environment
 * @prop {string} env - The environment object to use
 */
module.exports = function configuration(env) {
    return config[env];
};
