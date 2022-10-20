const cardArray = [
	{
		name: 'html',
		img: 'img/html.png',
	},
	{
		name: 'css',
		img: 'img/css.png',
	},
	{
		name: 'javascript.png',
		img: 'img/javascript.png',
	},
	{
		name: 'react',
		img: 'img/react.png',
	},
	{
		name: 'nodejs',
		img: 'img/nodejs.png',
	},
	{
		name: 'vercel',
		img: 'img/vercel.jpg',
	},
	{
		name: 'html',
		img: 'img/html.png',
	},
	{
		name: 'css',
		img: 'img/css.png',
	},
	{
		name: 'javascript.png',
		img: 'img/javascript.png',
	},
	{
		name: 'react',
		img: 'img/react.png',
	},
	{
		name: 'nodejs',
		img: 'img/nodejs.png',
	},
	{
		name: 'vercel',
		img: 'img/vercel.jpg',
	}
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard () {
	for (let i = 0; i < 10; i++) {
		const card = document.createElement('img');
		card.setAttribute('src', 'img/background.png');
		card.setAttribute('data-id', i);
		gridDisplay.append(card);
	}
}

createBoard();
