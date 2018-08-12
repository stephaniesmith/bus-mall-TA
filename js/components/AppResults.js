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
            <div class="cat-info">
                <h2>About the Cats</h2>
                <p>Cat ipsum dolor sit amet, sleeps on my head. Chase ball of string chirp at birds chase red laser dot. Scratch at the door then walk away love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) for flex claws on the human's belly and purr like a lawnmower so wake up human for food at 4am yet demand to be let outside at once, and expect owner to wait for me as i think about it yet eat from dog's food. Kitty kitty. The cat was chasing the mouse rub whiskers on bare skin act innocent and meow meow cat is love, cat is life pelt around the house and up and down stairs chasing phantoms. Fall asleep upside-down. Being gorgeous with belly side up hiss and stare at nothing then run suddenly away for more napping, more napping all the napping is exhausting chase imaginary bugs, yet mesmerizing birds or kitty poochy sleep. Eat all the power cords ignore the human until she needs to get up, then climb on her lap and sprawl i am the best bleghbleghvomit my furball really tie the room together for relentlessly pursues moth. </p>
            </div>
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