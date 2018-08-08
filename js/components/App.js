import html from '../html.js';
import Poll from './Poll.js';
import catsApi from '../catsApi.js';
import Results from './Results.js';
import ResultsChart from './ResultsChart.js';

const template = () => {
    return html`
            <h1>Cute Cat Vote</h1>
            <main>
                <section>
                    <div class="chart"></div>
                    <ul class="results"></ul>
                </section>
            </main>
    `;
};

export default class App {
    constructor() {
        this.cats = catsApi.getRandomCats();
        this.rounds = 25;
    }

    renderResults(cats) {

        this.rounds = 25;

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
        this.div = dom.querySelector('div');
        this.chartDiv = dom.querySelector('.chart');
        this.resultsUl = dom.querySelector('.results');

        const poll = new Poll({
            cats: this.cats,
            rounds: this.rounds,
            handleRounds: (cat) => {

                poll.rounds --;
                this.rounds --;

                catsApi.addVote(cat);

                poll.tallyRounds();

                if(!this.rounds) this.renderResults(catsApi.get());
            }
        });
        
        this.div.appendChild(poll.render());

        return dom;
    }
}