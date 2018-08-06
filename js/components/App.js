import html from '../html.js';

const template = () => {
    return html`
        <h1>Hello World</h1>
    `;
};

export default class App {
    render() {
        const dom = template();
        return dom;
    }
};