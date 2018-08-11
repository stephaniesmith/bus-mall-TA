import html from '../html.js';

let template = function() {
    return html`
        <h2>Results Chart</h2>
        <div class="chart-div">
            <canvas></canvas>
        </div>
    `;
};

export default class ResultChart {
    constructor(props) {
        this.cats = props.cats;
    }

    render() {
        let dom = template();

        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        const labels = [];
        const data = [];

        this.cats.forEach(cat => {
            if(cat.votes) {
                labels.push(cat.name);
                data.push(cat.votes);
            }
        });

        this.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)'
                    ]
                }]
            },
            options: {
                
            }
        });


        return dom;
    }
}