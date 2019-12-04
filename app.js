import { getHome } from "./controllers/homeController.js";
import { getLogin, getRegister } from "./controllers/userController.js";

const app = Sammy("body", function() {
    this.use("Handlebars", "hbs");

    this.get("#/home", getHome);

    this.get("#/login", getLogin);

    this.get("#/register", getRegister);
})

app.run("#/home");