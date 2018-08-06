

const toDOM = html => {

    const template = document.createElement('template');
    template.innerHTML = html;

    return template.content;
};

const html = (strings, ...values) => {
    const htmlString = String.raw(strings, ...values);
    return toDOM(htmlString);
};

export default html;