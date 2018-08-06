import Template from '../Template.js';

const template = new Template(() => {
    return `
        <h1>Hello World</h1>
    `;
});

export default class App {
    render() {
        const dom = template();
        return dom;
    }
};