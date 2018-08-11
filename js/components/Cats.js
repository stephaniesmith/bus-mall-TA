import html from '../html.js';
import Cat from './Cat.js';
import catsApi from '../catsApi.js';

const template = () => {
    return html`
            <ul></ul>
    `;
};

export default class Cats {
    constructor(props) {
        this.cats = props.cats;
        this.handleRounds = props.handleRounds;
    }

    removeCats() {
        while(this.ul.children.length) {
            this.ul.lastChild.remove();
        }
    }

    newRound() {   
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
        this.ul = dom.querySelector('ul');

        this.renderCats(this.cats);

        return dom;
    }
}