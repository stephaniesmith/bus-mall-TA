const storedCats = window.localStorage.getItem('cats');

let cats;

storedCats && storedCats !== 'undefined'
    ? cats = JSON.parse(storedCats)
    : cats = {};

export default cats;

window.addEventListener('beforeunload', () => {
    const json = JSON.stringify(cats);
    console.log('window unload, json is', json);
    window.localStorage.setItem('cats', json);
});

window.resetData = () => {
    window.localStorage.removeItem('cats');
    cats = undefined;
    window.location.reload();
};
