export function getTemplate(path, context) {
    context.loadPartials({
        header: "../view/common/header.hbs",
        footer: "../view/common/footer.hbs"
    })
    .then(function() {
        this.partial(`../view/${path}`)
    })
}