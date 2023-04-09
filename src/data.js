import tourOneImg from './images/tour-1.jpeg';
import tourTwoImg from './images/tour-2.jpeg';
import tourThreeImg from './images/tour-3.jpeg';
import tourFourImg from './images/tour-4.jpeg';
import tourFiveImg from './images/tour-5.jpeg';
import tourSixImg from './images/tour-6.jpeg';

export const PageLinks = [
	{ id: 1, href: '#home', text: 'Home' },
	{ id: 2, href: '#about', text: 'about' },
	{ id: 3, href: '#services', text: 'services' },
	{ id: 4, href: '#tours', text: 'tours' },
];

export const SocialLinks = [
	{ id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
	{ id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
	{ id: 3, href: 'https://www.square.com', icon: 'fab fa-squarespace' },
];

export const PageServices = [
	{
		id: 1,
		icon: 'fas fa-wallet fa-fw',
		title: 'saving money',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
	},
	{
		id: 2,
		icon: 'fas fa-tree fa-fw',
		title: 'endless hiking',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
	},
	{
		id: 3,
		icon: 'fas fa-socks fa-fw',
		title: 'amazing comfort',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
	},
];

export const PageTours = [
	{
		id: 1,
		img: tourOneImg,
		date: 'august 26th, 2020',
		title: 'Tibet Adventure',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'china',
		duration: '6 days',
		cost: 'from $2100',
	},
	{
		id: 2,
		img: tourTwoImg,
		date: 'october 1th, 2020',
		title: 'best of java',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'indonesia',
		duration: '11 days',
		cost: 'from $1400',
	},
	{
		id: 3,
		img: tourThreeImg,
		date: 'september 15th, 2020',
		title: 'explore hong kong',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'hong kong',
		duration: '8 days',
		cost: 'from $5000',
	},
	{
		id: 4,
		img: tourFourImg,
		date: 'december 5th, 2019',
		title: 'kenya highlights',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'kenya',
		duration: '20 days',
		cost: 'from $3300',
	},
	{
		id: 5,
		img: tourFiveImg,
		date: 'january 5th, 2019',
		title: 'sri lanka highlights',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'Sri Lanka',
		duration: '10 days',
		cost: 'from $2300',
	},
	{
		id: 6,
		img: tourSixImg,
		date: 'February 1st, 2012',
		title: 'Dubai highlights',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'Dubai',
		duration: '2 days',
		cost: 'from $1000',
	},
];
