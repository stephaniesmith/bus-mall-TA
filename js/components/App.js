import html from '../html.js';
import Poll from './Poll.js';

const template = () => {
    return html`
        <div>
            <h1>Hello World</h1>
        </div>
    `;
};

export default class App {
    render() {
        const dom = template();
        this.div = dom.querySelector('div');
        console.log(this.div);
        const poll = new Poll();
        console.log(poll);

        this.div.appendChild(poll.render());
        return dom;
    }
};