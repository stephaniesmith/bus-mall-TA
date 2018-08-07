import html from '../html.js';

const template = (cat) => {
    return html`
        <div class="cat" title="${cat.name}" style="background: center / cover no-repeat url(${cat.url})"></div>
    `;
};

export default class Cat {
    constructor(props) {
        this.cat = props.cat;
    }

    render() {
        const dom = template(this.cat);
        return dom;
    }
}