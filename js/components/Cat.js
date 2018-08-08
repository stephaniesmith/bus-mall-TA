import html from '../html.js';

const template = (cat) => {
    return html`
        <div class="cat" title="${cat.name}" style="background: center / cover no-repeat url(${cat.url})"></div>
    `;
};

export default class Cat {
    constructor(props) {
        this.cat = props.cat;
        this.handleRounds = props.handleRounds;
    }

    render() {
        const dom = template(this.cat);
        this.div = dom.querySelector('div.cat');

        this.div.addEventListener('click', () => {
            this.handleRounds(this.cat.name);
        });

        return dom;
    }
}