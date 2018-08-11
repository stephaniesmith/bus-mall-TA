import AppCats from './components/AppCats.js';

const app = new AppCats();
const root = document.getElementById('root');
const dom = app.render();
root.appendChild(dom);