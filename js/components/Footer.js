import html from '../html.js';

let template = function() {
    return html`
        <p>Cute Cats Inc.</p>
   `;
};

export default class Footer {

    render() {
        let dom = template();
        return dom;
    }
}