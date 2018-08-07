import html from '../html.js';

const template = () => {
    return html`
        <div>RESULTS!!!</div>
    `;
};

export default class Results {

    render() {
        const dom = template(this.cat);
        return dom;
    }
}