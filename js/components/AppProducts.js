import html from '../html.js';
import Header from './Header.js';

let template = function() {
    return html`
        <header></header>
   `;
};

export default class AppProducts {
    constructor() {
       
    }

    render() {
        let dom = template();
        this.header = dom.querySelector('header');

        const header = new Header();

        this.header.appendChild(header.render());

        return dom;
    }
}