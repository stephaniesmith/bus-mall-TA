import App from './components/App.js';

const app = new App();
const root = document.getElementById('root');
const dom = app.render();
root.appendChild(dom);