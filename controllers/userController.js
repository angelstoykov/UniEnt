import { getTemplate } from "../helpers/helper.js";

export function getLogin(context) {
    getTemplate("user/login.hbs", context)
}

export function getRegister(context) {
    getTemplate("user/register.hbs", context);
}