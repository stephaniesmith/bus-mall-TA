const cats = [
    {
        name: 'ballCat',
        url: '../../media/ball-cat.jpg',
        votes: 0
    },
    {
        name: 'computerCat',
        url: '../../media/computer-cat.jpg',
        votes: 0
    },
    {
        name: 'fieldCat',
        url: '../../media/field-cat.jpg',
        votes: 0
    },
    {
        name: 'floppyCat',
        url: '../../media/floppy-cat.jpg',
        votes: 0
    },
    {
        name: 'handsupCat',
        url: '../../media/handsup-cat.jpg',
        votes: 0
    },
    {
        name: 'headstandCat',
        url: '../../media/headstand-cat.jpg',
        votes: 0
    },
    {
        name: 'jumpingCat',
        url: '../../media/jumping-cat.jpg',
        votes: 0
    },
    {
        name: 'livingroomCat',
        url: '../../media/livingroom-cat.jpg',
        votes: 0
    },
    {
        name: 'pantsCat',
        url: '../../media/pants-cat.jpg',
        votes: 0
    },
    {
        name: 'petCat',
        url: '../../media/pet-cat.jpg',
        votes: 0
    },
    {
        name: 'pirateCat',
        url: '../../media/pirate-cat.jpg',
        votes: 0
    },
    {
        name: 'pocketCat',
        url: '../../media/pocket-cat.jpg',
        votes: 0
    },
    {
        name: 'sadCat',
        url: '../../media/sad-cat.jpg',
        votes: 0
    },
    {
        name: 'screamingCat',
        url: '../../media/screaming-cat.jpg',
        votes: 0
    },
    {
        name: 'winkingCat',
        url: '../../media/winking-cat.jpg',
        votes: 0
    }
];

export default {
    get: () => cats,
    getRandomCats: () => {
        const randomCats = [];

        while(randomCats.length < 3) {
            const index = Math.floor(Math.random() * 15);
            const cat = cats[index];
            if(randomCats.includes(cat)) continue;
            randomCats.push(cat);
        }

        return randomCats;
    },
    addVote: (catName) => {
        const selectedCat = cats.filter(cat => cat.name === catName);
        const index = cats.indexOf(selectedCat[0]);
        cats[index].votes ++;
        console.log(cats);
    }
};