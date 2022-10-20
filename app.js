const cardArray = [
	{
		name: 'html',
		img: 'images/html.png',
	},
	{
		name: 'css',
		img: 'images/css.png',
	},
	{
		name: 'javascript.png',
		img: 'images/javascript.png',
	},
	{
		name: 'react',
		img: 'images/react.png',
	},
	{
		name: 'nodejs',
		img: 'images/nodejs.png',
	},
	{
		name: 'vercel',
		img: 'images/vercel.jpg',
	},
	{
		name: 'html',
		img: 'images/html.png',
	},
	{
		name: 'css',
		img: 'images/css.png',
	},
	{
		name: 'javascript.png',
		img: 'images/javascript.png',
	},
	{
		name: 'react',
		img: 'images/react.png',
	},
	{
		name: 'nodejs',
		img: 'images/nodejs.png',
	},
	{
		name: 'vercel',
		img: 'images/vercel.jpg',
	}
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard () {
	for (let i = 0; i < 10; i++) {
		const card = document.createElement('img');
		card.setAttribute('src', 'images/blank.png');
		card.setAttribute('data-id', i);
		console.log(card, i);
	}
}

createBoard();
