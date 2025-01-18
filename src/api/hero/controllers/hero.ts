/**
 * hero controller
 */

"use strict";

import { Core, factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::hero.hero",
  ({ strapi }: { strapi: Core.Strapi }) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;
      const entity = await strapi.db
        .query("api::hero.hero")
        .findOne({ where: { slug },
            populate: ["cover", "image"],
        });
      if (!entity) {
        return ctx.notFound();
      }
      return this.transformResponse(entity);
    },
  })
);
