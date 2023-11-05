'use strict';

/**
 * rental-home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::rental-home.rental-home');


// Reemplazamos el id con el slug al momento de buscar con el find-one
module.exports = createCoreController('api::rental-home.rental-home', ({ strapi }) => ({

    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query('api::rental-home.rental-home').findOne({
            where: { slug: id },
            populate: true
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));