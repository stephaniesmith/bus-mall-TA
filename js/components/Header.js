import html from '../html.js';

let template = function() {
    return html`
        <h1>Cute Cat Vote</h1>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index-cats.html">Cats</a></li>
            <li><a href="index-results.html">Results</a></li>
        <ul>

   `;
};

export default class Header {

    render() {
        let dom = template();
        return dom;
    }
}