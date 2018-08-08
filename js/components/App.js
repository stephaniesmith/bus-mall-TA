import html from '../html.js';
import Poll from './Poll.js';
import catApi from '../catsApi.js';

const template = () => {
    return html`
        <div>
            <h1>Cute Cat Vote</h1>
        </div>
    `;
};

export default class App {
    constructor() {
        this.cats = catApi.getRandomCats();
        this.rounds = 25;
    }

    render() {
        const dom = template(this.rounds);
        this.div = dom.querySelector('div');

        const poll = new Poll({
            cats: this.cats,
            rounds: this.rounds,
            handleRounds: event => {
                event.preventDefault();

                poll.rounds --;
                this. rounds --;

                // this.span.innerText = this.rounds;

                poll.tallyRounds(event);
            }
        });
        
        this.div.appendChild(poll.render());

        return dom;
    }
}