import html from '../html.js';
import Header from './Header.js';
import Footer from './Footer.js';

let template = function() {
    return html`
        <header></header>
        <main></main>
        <footer></footer>
   `;
};

export default class AppResults {
    constructor() {
       
    }

    render() {
        let dom = template();
        this.header = dom.querySelector('header');
        this.footer = dom.querySelector('footer');

        const header = new Header();
        const footer = new Footer();

        this.header.appendChild(header.render());        
        this.footer.appendChild(footer.render());

        return dom;
    }
}