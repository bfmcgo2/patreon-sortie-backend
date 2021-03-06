'use strict';

/**
 * patreon.js controller
 *
 * @description: A set of functions called "actions" of the `patreon` plugin.
 */

 module.exports = {
   callback: async (ctx) => {
     return strapi.plugins.patreon.services.patreon.callback(ctx);
   },
 };
