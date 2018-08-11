import html from '../html.js';
import catsApi from '../catsApi.js';
import Header from './Header.js';
import Cats from './Cats.js';
import Footer from './Footer.js';

let template = function() {
    return html`
        <header></header>
        <main></main>
        <footer></footer>
   `;
};

export default class AppCats {
    constructor() {
        this.cats = catsApi.get();
    }

    render() {
        let dom = template();
        this.header = dom.querySelector('header');
        this.main = dom.querySelector('main');
        this.footer = dom.querySelector('footer');

        const header = new Header();

        const cats = new Cats({
            cats: this.cats,
            handleRounds: (cat) => {
                console.log(cat);
            }
        });

        const footer = new Footer();

        this.header.appendChild(header.render());
        this.main.appendChild(cats.render());
        this.footer.appendChild(footer.render());

        return dom;
    }
}