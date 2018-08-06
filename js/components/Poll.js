import html from '../html.js';
import Cat from './Cat.js';
import catsApi from '../catsApi.js';

const template = () => {
  return html`
        <div>
            <h2>This is a poll.</h2>
            <ul></ul>
        </div>
  `;
};

export default class Poll {
    constructor(props) {
        this.cats = props.cats,
        this.rounds = 5;
    }

    render() {
        const dom = template();
        this.ul = dom.querySelector('ul');

        this.ul.addEventListener('click', event => {
            this.rounds --;
            console.log(this.rounds);
            catsApi.getRandomCats();
            if(!this.rounds) {
                console.log('NO MORE ROUNDS!');

            }
        })

        for(let i = 0; i < this.cats.length; i++) {
            let li = new Cat({
                cat: this.cats[i]
            });
            this.ul.appendChild(li.render());
        }

        return dom;
    }
};