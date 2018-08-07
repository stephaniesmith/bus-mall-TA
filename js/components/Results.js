import html from '../html.js';

const template = (name, votes) => {
    return html`
        <li class="results"><strong>${name}</strong>: ${votes}</li>
    `;
};

export default class Results {
    constructor(props) {
        this.name = props.name;
        this.votes = props.votes;
    }

    render() {
        const dom = template(this.name, this.votes);
        return dom;
    }
}