import html from '../html.js';

let template = function() {
    return html`
        <div class="menu">
            <h1>Cute Cat Vote</h1>
            <div class="menu-button">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
            </div>
        </div>
        <nav>
            <a class="nav-item" href="index.html">Home</a>
            <a class="nav-item" href="index-cats.html">Cats</a>
            <a class="nav-item" href="index-results.html">Results</a>
        <nav>
   `;
};

export default class Header {

    render() {
        const dom = template();
        this.menu = dom.querySelector('.menu-button');
        this.nav = dom.querySelector('nav');

        this.menu.addEventListener('click', () => {

            const { classList } = this.nav;

            classList.contains('show-nav')
                ? classList.remove('show-nav')
                : classList.add('show-nav');
        });
        
        return dom;
    }
}