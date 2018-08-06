import html from '../html.js';

const template = () => {
  return html`
      <h2>This is a poll.</h2>
  `;
};

export default class Poll {
  render() {
      const dom = template();
      return dom;
  }
};