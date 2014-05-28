'use strict';

var tokens = require('./tokens.json'),
    config = {
        local: {
            host:           'localhost',
            port:           '3000',
            accessToken:    tokens.accessToken,
            deviceId:       tokens.deviceId,
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
