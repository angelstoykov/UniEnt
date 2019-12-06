import {
    getTemplate, saveAndRedirect
} from "../helpers/helper.js";
import { register } from "../models/userModel.js";

export function getLogin(context) {
    getTemplate("user/login.hbs", context)
}

export function getRegister(context) {
    getTemplate("user/register.hbs", context);
}

export function postRegister(context) {
    if(context.params.password !== context.params.rePassword) {
        alert("Passwords do NOT match");
        throw new Error("Passwords do not match");
    }

    let data = {
        username: context.params.username,
        password: context.params.password
    }

    register(data)
        .then(saveAndRedirect(context, "#/home", data))
        .catch(console.log);
}