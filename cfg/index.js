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
 * @memberof ABSTRACTOR
 * @desc Manages all the configuration per environment
 * @prop {object} server - The Restify HTTP server
 * @prop {object} config - The configuration values
 */
module.exports = function configuration(env) {
    return config[env];
};
