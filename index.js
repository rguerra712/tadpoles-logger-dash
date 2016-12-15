(function(){
    'use strict';

    const tadpolesLogger = require('tadpoles-logger');
    const babyLogger = tadpolesLogger.babyLogger;
    const logBuilder = tadpolesLogger.logBuilder;
    const config = require('./config/config.js');

    let dashMac = config.dashSettings.dashMacAddress;
    let logs = [
            logBuilder.buildSleepLog(),
            logBuilder.buildBathroomLog(),
            logBuilder.buildFoodLog()
        ];

    if (dashMac){
        let dash = dash_button(dashMac, null, null, 'all');

        dash.on("detected", function (){
            babyLogger.log(logs);
        });
    }
})();