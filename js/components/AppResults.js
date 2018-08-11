import html from '../html.js';
import catsApi from '../services/catsApi.js';
import Header from './Header.js';
import ResultsChart from './ResultsChart.js';
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
        this.footer = dom.querySelector('footer');

        const header = new Header();

        const resultsChart = new ResultsChart({
            cats: this.cats
        });

        const footer = new Footer();

        this.header.appendChild(header.render());
        this.chartDiv.appendChild(resultsChart.render());        
        this.footer.appendChild(footer.render());

        return dom;
    }
}