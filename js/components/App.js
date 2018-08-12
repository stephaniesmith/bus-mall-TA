import html from '../html.js';
import catsApi from '../services/catsApi.js';
import Header from './Header.js';
import Cats from './Cats.js';
import Results from './Results.js';
import Footer from './Footer.js';

const template = (rounds) => {
    return html`
            <header>
            </header>
            <main>
                <section class="cat-poll">
                    <h2>Click to Vote</h2>
                    <h3>Total Rounds: <span>${rounds}</span></h3>
                    <a class="hidden-cat" href="index-results.html">More results</a>
                </section>
                <section>
                    <ul class="results"></ul>
                </section>
            </main>
            <footer></footer>
    `;
};

export default class App {
    constructor() {
        this.cats = catsApi.getRandomCats();
        this.rounds = 5;
    }

    renderResults(cats) {

        cats.forEach(cat => {
            const results = new Results({
                url: cat.url,
                views: cat.views,
                votes: cat.votes
            });
            this.resultsUl.appendChild(results.render());
        });
        this.a.classList.remove('hidden-cat');
    }

    render() {
        const dom = template(this.rounds);
        this.header = dom.querySelector('header');
        this.main = dom.querySelector('main');
        this.footer = dom.querySelector('footer');
        this.pollSection = dom.querySelector('.cat-poll');
        this.resultsUl = dom.querySelector('.results');
        this.span = dom.querySelector('span');
        this.a = dom.querySelector('a');

        const header = new Header();

        const poll = new Cats({
            cats: this.cats,
            rounds: this.rounds,
            handleRounds: (cat) => {

                this.rounds --;
                this.span.innerText = this.rounds;
                catsApi.addVote(cat);

                poll.removeCats();

                this.rounds
                    ? poll.newRound()
                    : this.renderResults(catsApi.get());

            }
        });

        const footer = new Footer();

        this.header.appendChild(header.render());
        this.pollSection.appendChild(poll.render());
        this.footer.appendChild(footer.render());

        return dom;
    }
}