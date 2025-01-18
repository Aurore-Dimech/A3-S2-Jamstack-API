"use strict";

import path from "path";
import { config } from "process";
import middlewares from "../../../../config/middlewares";

export default {
    routes: [
        {
            method: "GET",
            path: "/heroes/:slug",
            handler: "hero.findBySlug",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ],
};