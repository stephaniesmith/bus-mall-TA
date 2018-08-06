import html from '../html.js';
import Poll from './Poll.js';
import catApi from '../catsApi.js';

const template = () => {
    return html`
        <div>
            <h1>Hello World</h1>
        </div>
    `;
};

export default class App {
    render() {
        const dom = template();
        this.div = dom.querySelector('div');

        const cats = catApi.getRandomCats();

        const poll = new Poll({
            cats: cats
        });

        this.div.appendChild(poll.render());
        return dom;
    }
};