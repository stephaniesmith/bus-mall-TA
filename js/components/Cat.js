import html from '../html.js';

const template = () => {
  return html`
      <li>This is a cat.</li>
  `;
};

export default class Product {
  render() {
      const dom = template();
      return dom;
  }
};