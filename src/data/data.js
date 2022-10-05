import img_mark_avif from '../assets/img/avatar-mark-webber.avif';
import img_mark_jpg from '../assets/img/avatar-mark-webber.jpg';
import img_mark_webp from '../assets/img/avatar-mark-webber.webp';

import img_angela_avif from '../assets/img/avatar-angela-gray.avif';
import img_angela_jpg from '../assets/img/avatar-angela-gray.jpg';
import img_angela_webp from '../assets/img/avatar-angela-gray.webp';

import img_jacob_avif from '../assets/img/avatar-jacob-thompson.avif';
import img_jacob_jpg from '../assets/img/avatar-jacob-thompson.jpg';
import img_jacob_webp from '../assets/img/avatar-jacob-thompson.webp';

import img_rizky_avif from '../assets/img/avatar-rizky-hasanuddin.avif';
import img_rizky_jpg from '../assets/img/avatar-rizky-hasanuddin.jpg';
import img_rizky_webp from '../assets/img/avatar-rizky-hasanuddin.webp';

import img_kimberly_avif from '../assets/img/avatar-kimberly-smith.avif';
import img_kimberly_jpg from '../assets/img/avatar-kimberly-smith.jpg';
import img_kimberly_webp from '../assets/img/avatar-kimberly-smith.webp';

import img_nathan_avif from '../assets/img/avatar-nathan-peterson.avif';
import img_nathan_jpg from '../assets/img/avatar-nathan-peterson.jpg';
import img_nathan_webp from '../assets/img/avatar-nathan-peterson.webp';

import img_anna_avif from '../assets/img/avatar-anna-kim.avif';
import img_anna_jpg from '../assets/img/avatar-anna-kim.jpg';
import img_anna_webp from '../assets/img/avatar-anna-kim.webp';

import image_chess_avif from '../assets/picture/image-chess.avif';
import image_chess_jpg from '../assets/picture/image-chess.jpg';
import image_chess_webp from '../assets/picture/image-chess.webp';

export const users = [
	{
		id: 0,
		firstName: 'Mark',
		lastName: 'Webber',
		avatar: {
			avif: img_mark_avif,
			jpg: img_mark_jpg,
			webp: img_mark_webp,
		},
		notification: {
			type: 'reacted to your recient post',
			post: 'My first tournament today!',
			group: '',
			picture: '',
			message: '',
			time: '1m ago',
		},
	},
	{
		id: 1,
		firstName: 'Angela',
		lastName: 'Gray',
		avatar: {
			avif: img_angela_avif,
			jpg: img_angela_jpg,
			webp: img_angela_webp,
		},
		notification: {
			type: 'followed you',
			post: '',
			group: '',
			picture: '',
			message: '',
			time: '5m ago',
		},
	},
	{
		id: 2,
		firstName: 'Jacob',
		lastName: 'Thompson',
		avatar: {
			avif: img_jacob_avif,
			jpg: img_jacob_jpg,
			webp: img_jacob_webp,
		},
		notification: {
			type: 'has joined your group',
			post: '',
			group: 'Chess Club',
			picture: '',
			message: '',
			time: '1 day ago',
		},
	},
	{
		id: 3,
		firstName: 'Rizky',
		lastName: 'Hasanuddin',
		avatar: {
			avif: img_rizky_avif,
			jpg: img_rizky_jpg,
			webp: img_rizky_webp,
		},
		notification: {
			type: 'sent you a private message',
			post: '',
			group: '',
			picture: '',
			message:
				"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lost of fun and improving my game.",
			time: '5 days ago',
		},
	},
	{
		id: 4,
		firstName: 'Kimberly',
		lastName: 'Smith',
		avatar: {
			avif: img_kimberly_avif,
			jpg: img_kimberly_jpg,
			webp: img_kimberly_webp,
		},
		notification: {
			type: 'commented on your picture',
			post: '',
			group: '',
			picture: {
				avif: image_chess_avif,
				webp: image_chess_webp,
				jpg: image_chess_jpg,
			},
			message: '',
			time: '1 week ago',
		},
	},
	{
		id: 5,
		firstName: 'Nathan',
		lastName: 'Peterson',
		avatar: {
			avif: img_nathan_avif,
			jpg: img_nathan_jpg,
			webp: img_nathan_webp,
		},
		notification: {
			type: 'reacted to your recient post',
			post: 'end-game strategies to increase your win rate',
			group: '',
			picture: '',
			message: '',
			time: '2 weeks ago',
		},
	},
	{
		id: 6,
		firstName: 'Anna',
		lastName: 'Kim',
		avatar: {
			avif: img_anna_avif,
			jpg: img_anna_jpg,
			webp: img_anna_webp,
		},
		notification: {
			type: 'left the group',
			post: '',
			group: 'Chess Club',
			picture: '',
			message: '',
			time: '2 weeks ago',
		},
	},
];
