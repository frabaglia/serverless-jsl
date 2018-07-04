'use strict';
const moment = require("moment")

module.exports.happyhour = (event, context, callback) => {
  try {

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Russell Service v1.0!',
        happyHourTime: 19,
        currentTime: moment().format('LTS'),
        isHappyHour: moment().hours() > 18 && moment().hours() < 20
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
