export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/brainstorm": [3],
	"/compliance": [4],
	"/constraint": [5],
	"/design_outputs": [6],
	"/interview_questions": [7],
	"/outcome": [8],
	"/requirements": [9],
	"/research": [10],
	"/specifications": [11],
	"/test": [12],
	"/tutorial": [13],
	"/user_needs": [14]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};