import AppProducts from './components/AppProducts.js';

const app = new AppProducts();
const root = document.getElementById('root');
const dom = app.render();
root.appendChild(dom);