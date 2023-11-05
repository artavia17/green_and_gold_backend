'use strict';

/**
 * rental-home service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rental-home.rental-home');
