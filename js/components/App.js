import html from '../html.js';
import catsApi from '../catsApi.js';
import Header from './Header.js';
import Poll from './Poll.js';
import Results from './Results.js';
import ResultsChart from './ResultsChart.js';
import Footer from './Footer.js';

const template = () => {
    return html`
            <header>
            </header>
            <main>
                <section class="poll">
                </section>
                <section>
                    <div class="chart"></div>
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

        const resultsChart = new ResultsChart({
            cats: cats
        });

        this.chartDiv.appendChild(resultsChart.render());
    }

    render() {
        const dom = template(this.rounds);
        this.header = dom.querySelector('header');
        this.main = dom.querySelector('main');
        this.footer = dom.querySelector('footer');
        this.pollSection = dom.querySelector('.poll');
        this.chartDiv = dom.querySelector('.chart');
        this.resultsUl = dom.querySelector('.results');

        const header = new Header();

        const poll = new Poll({
            cats: this.cats,
            rounds: this.rounds,
            handleRounds: (cat) => {
                console.log(this.rounds);
                poll.rounds --;
                this.rounds --;

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