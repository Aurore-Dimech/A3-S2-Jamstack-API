/**
 * unity controller
 */

"use strict";

import { Core, factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::unity.unity",
  ({ strapi }: { strapi: Core.Strapi }) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;
      const entity = await strapi.db
        .query("api::unity.unity")
        .findOne({ where: { slug },
            populate: ["image"]
        });
      if (!entity) {
        return ctx.notFound();
      }
      return this.transformResponse(entity);
    },
  })
);
