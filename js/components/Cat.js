import html from '../html.js';

const template = (cat) => {
    return html`
        <div>
            <li>This is a ${cat.name}.</li>
            <div class="cat" style="background: center / cover no-repeat url(${cat.url})"></div>
        </div>
    `;
};

export default class Cat {
    constructor(props) {
        this.cat = props.cat
    }

    render() {
        const dom = template(this.cat);
        return dom;
    }
};