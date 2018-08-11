import html from '../html.js';
import catsApi from '../services/catsApi.js';
import Header from './Header.js';
import ResultsChart from './ResultsChart.js';
import Results from './Results.js';
import Footer from './Footer.js';

let template = function() {
    return html`
        <header></header>
        <main>
            <div class="chart"></div>
            <ul class="results"></ul>
        </main>
        <footer></footer>
   `;
};

export default class AppResults {
    constructor() {
        this.cats = catsApi.get();
    }

    render() {
        let dom = template();
        this.header = dom.querySelector('header');
        this.chartDiv = dom.querySelector('.chart');
        this.resultsUl = dom.querySelector('.results');
        this.footer = dom.querySelector('footer');

        const header = new Header();

        const resultsChart = new ResultsChart({
            cats: this.cats
        });

        this.cats.forEach(cat => {
            const results = new Results({
                url: cat.url,
                views: cat.views,
                votes: cat.votes
            });
            this.resultsUl.appendChild(results.render());
        });

        const footer = new Footer();

        this.header.appendChild(header.render());
        this.chartDiv.appendChild(resultsChart.render());        
        this.footer.appendChild(footer.render());

        return dom;
    }
}