'use strict';
const moment = require("moment-timezone")

module.exports.happyhour = (event, context, callback) => {
  try {
    const now = moment().tz("America/Argentina/Buenos_Aires");
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Russell Service v1.0!',
        happyHourTime: 19,
        currentTime: now.format('LTS'),
        currentTimeHours: now.hours(),
        isHappyHour: now.hours() > 18 && now.hours() < 21
      })
    };

    callback(null, response);

  } catch (e) {

    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: e.message
      })
    };

    callback(null, response);

  }
};
