import AppResults from './components/AppResults.js';

const app = new AppResults();
const root = document.getElementById('root');
const dom = app.render();
root.appendChild(dom);