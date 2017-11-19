const handlebars = require('handlebars');
const moment = require('moment-timezone');

moment.tz.setDefault('America/Los_Angeles');

/**
 * Note: Metalsmith converts date string in metadate to Date object set
 * to UTC. This function removes the UTC designation from Date object.
 *
 * @param {Date} date
 */
const toMoment = function (date) {
  let isoString = date.toISOString();
  let sanitized = isoString.substring(0, isoString.indexOf('.'));
  
  return moment(sanitized);
};

handlebars.registerHelper('calendar', function (date) {
  return toMoment(date).format('MMMM Do, YYYY');
});

handlebars.registerHelper('iso3339', function (date) {
  return toMoment(date).format('YYYY-MM-DDTHH:mm:ssZ');
});

// Apparently, Metalsmith passes local context to no-arg functions
handlebars.registerHelper('iso3339stamp', function (datetime) {
  return moment().format('YYYY-MM-DDTHH:mm:ssZ');
})

handlebars.registerHelper('yyyymmdd', function (date) {
  return toMoment(date).format('YYYY-MM-DD');
});

handlebars.registerHelper('datetime', function (date) {
  return toMoment(date).format('MMMM Do YYYY, HH:mmZ');
});