"use strict";

import path from "path";
import { config } from "process";
import middlewares from "../../../../config/middlewares";

export default {
    routes: [
        {
            method: "GET",
            path: "/unities/:slug",
            handler: "unity.findBySlug",
            config: {
                policies: [],
                middlewares: [],
            },
        }
    ],
};