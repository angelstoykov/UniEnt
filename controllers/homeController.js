import { getTemplate } from "../helpers/helper.js";

export function getHome(context) {
    getTemplate("home.hbs", context);
}