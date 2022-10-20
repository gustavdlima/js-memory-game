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

cardArray.sort(() => 0.5 - Math.random())

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
	for (let i = array.lenght - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j] = array[i], array[i]];
		// above is a new way to make this in ES6/ECMAScript 2015:
		// var temp = array [i];
		// array[i] = array[j];
		// array[j] = temp;
	}
}
