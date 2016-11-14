'use strict';


var path = require('path');

var root = path.join(__dirname, './..'); // path.resolve('./'); // process.cwd();

var config = {
	tasks: {}
};

config.files = {
	srcJs: [
		joinRoot('./src/**/*.js'),
	],
	allJs: [
		joinRoot('./src/**/*.js'),
		joinRoot('./test/**/*.js'),
		'!' + joinRoot('./test/html/**/*.*')
	],
	boot: [
		'!' + joinRoot('./build/**/*.*'),
		'!' + joinRoot('./release/**/*.*'),
		'!' + joinRoot('./node_modules/**/*.*'),
		joinRoot('./**/src/boot/currentAppSys.js'),
		joinRoot('./**/src/boot/config.js'),
		joinRoot('./**/src/boot/context.js'),
		joinRoot('./**/src/boot/index.js'),
		joinRoot('./**/src/index.js'),
		joinRoot('./index.js'),
		joinRoot('./run.cmd'),
	],
	server: [
		'!' + joinRoot('./build/**/*.*'),
		'!' + joinRoot('./release/**/*.*'),
		'!' + joinRoot('./node_modules/**/*.*'),
		joinRoot('./**/src/server/**/*.*'),
	],
	client: [
		'!' + joinRoot('./build/**/*.*'),
		'!' + joinRoot('./release/**/*.*'),
		'!' + joinRoot('./node_modules/**/*.*'),
		joinRoot('./**/src/client/**/*.*'),
	],
	buildJs: [
		'!' + joinRoot('./gulp/**/*.js'),
		'!' + joinRoot('./node_modules/**/*.*'),
		joinRoot('./build/**/*.js'),
	],
	buildElse: [
		'!' + joinRoot('./gulp/**/*.js'),
		'!' + joinRoot('./node_modules/**/*.*'),
		'!' + joinRoot('./build/**/*.js'),
		joinRoot('./build/**/*.*'),
	]
};

config.directories = {
	build: joinRoot('./build'),
	release: joinRoot('./release')
};

config.ngPath = 'D:/Workspace/office/Ng7Client-Dev/app/modules/nbQmap/topoTools';
// config.ngPath = 'D:/Code/7.0/Web/NetBrainNGClient/src/NetBrainNG/app/modules/nbQmap/topoTools';
//config.ngPath = 'D:/workspace/git/NgDev/app/modules/nbQmap/topoTools';

function joinRoot(subPath) {
	return path.join(root, subPath);
}

module.exports = config;
