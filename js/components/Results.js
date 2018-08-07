import html from '../html.js';

const template = (url, views, votes) => {
    return html`
        <li class="results">
            <div class="cat" style="background: center / cover no-repeat url(${url})">
                <h2>Views: ${views}</h2>
                <h2>Votes: ${votes}</h2>
            </div>
        </li>
    `;
};

export default class Results {
    constructor(props) {
        this.url = props.url;
        this.views = props.views;
        this.votes = props.votes;
    }

    render() {
        const dom = template(this.url, this.views, this.votes);
        return dom;
    }
}