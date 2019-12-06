import { saveUser } from "./storage.js"

export function getTemplate(path, context) {
    context.loadPartials({
        header: "../view/common/header.hbs",
        footer: "../view/common/footer.hbs"
    })
    .then(function() {
        this.partial(`../view/${path}`)
    })
}

export function saveAndRedirect(context, path, data) {
    saveUser(data);
    context.redirect(path)
}