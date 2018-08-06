import html from '../html.js';

const template = () => {
  return html`
      <h2>This is a product.</h2>
  `;
};

export default class Product {
  render() {
      const dom = template();
      return dom;
  }
};