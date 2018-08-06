export default class Template {
    constructor(templateFunction) {
        this.templateFunction = templateFunction;
    }

    render(data) {
        const templateElement = document.createElement('template');

        templateElement.innerHTML = this.templateFunction(data);

        return templateElement.content;
    }
}