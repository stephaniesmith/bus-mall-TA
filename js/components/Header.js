import html from '/js/html.js';

let template = function() {
    return html`
        <h1>Cute Cat Vote</h1>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">Products</a></li>
            <li><a href="index.html">Results</a></li>
        <ul>

   `;
};

export default class Header {
    constructor(props) {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}