import html from '../html.js';
import Cat from './Cat.js';
import catsApi from '../catsApi.js';

const template = (rounds) => {
    return html`
        <section>
            <h2>Click on your favorite cat to vote.</h2>
            <h3>Total Rounds: <span>${rounds}</span></h3>
            <ul></ul>
        </section>
    `;
};

export default class Poll {
    constructor(props) {
        this.cats = props.cats;
        this.rounds = props.rounds;
        this.handleRounds = props.handleRounds;
    }

    newRound() {   
        this.span.innerText = this.rounds;

        while(this.ul.children.length) {
            this.ul.lastChild.remove();
        }

        this.cats = catsApi.getRandomCats();
        this.renderCats(this.cats);  
    }

    renderCats(cats) {
        for(let i = 0; i < cats.length; i++) {
            let li = new Cat({
                cat: cats[i],
                handleRounds: this.handleRounds
            });
            this.ul.appendChild(li.render());
        }
    }

    render() {
        const dom = template(this.rounds);
        this.span = dom.querySelector('span');
        this.ul = dom.querySelector('ul');

        this.renderCats(this.cats);

        return dom;
    }
}