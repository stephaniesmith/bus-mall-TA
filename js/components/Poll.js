import html from '../html.js';
import Cat from './Cat.js';
import catsApi from '../catsApi.js';
import Results from './Results.js';
import ResultsChart from './ResultsChart.js';

const template = rounds => {
    return html`
        <h2>Click on your favorite cat to vote.</h2>
        <h3>Total Rounds: <span>${rounds}</span></h3>
        <div class="results"></div>
        <ul></ul>
    `;
};

export default class Poll {
    constructor(props) {
        this.cats = props.cats,
        this.handleRounds = props.handleRounds,
        this.rounds = 25;
    }

    tallyRounds(event) {
        event.preventDefault();
        
        catsApi.addVote(event.target.title);
        
        this.rounds --;

        this.span.innerText = this.rounds;

        while(this.ul.children.length) {
            this.ul.lastChild.remove();
        } 

        if(this.rounds) { 
            this.cats = catsApi.getRandomCats();
            this.renderCats(this.cats);  
        }
        else {
            this.rounds = 5;
            this.ul.removeEventListener('click', this.handleRounds);

            const cats = catsApi.get();

            cats.forEach(cat => {
                const results = new Results({
                    url: cat.url,
                    views: cat.views,
                    votes: cat.votes
                });
                this.ul.appendChild(results.render());
            });

            const resultsChart = new ResultsChart({
                cats: cats
            });

            this.resultsDiv.appendChild(resultsChart.render());
        }
    }

    renderCats(cats) {
        for(let i = 0; i < cats.length; i++) {
            let li = new Cat({
                cat: cats[i]
            });
            this.ul.appendChild(li.render());
        }
    }

    render() {
        const dom = template(this.rounds);
        this.div = dom.querySelector('div');
        this.resultsDiv = dom.querySelector('div.results');
        this.ul = dom.querySelector('ul');
        this.span = dom.querySelector('span');

        this.renderCats(this.cats);

        this.ul.addEventListener('click', this.handleRounds);

        return dom;
    }
}