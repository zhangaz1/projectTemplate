var src = './src/';

var IslandGroup = require(`${src}model/islandGroup.js`);
var originalData;
originalData = getRealData();

var defaultOptions = require(`${src}options/defaultOptions.js`);

var convert = require(`${src}convert/convert.js`);
var split = require(`${src}split/split.js`);
var SymmetricLayout = require(`${src}layout/symmetric/symmetricLayout.js`);

var topoData = convert(originalData, defaultOptions);
var islandGroup = split(topoData);

var layouter = new SymmetricLayout();

islandGroup.layout(layouter);

writeToDataFile(originalData, 'symmetric');

function getRealData() {
	return require('./test/realData.js');
}

function writeToDataFile(originalData, type) {
	var fs = require('fs');

	var context = 'var treeData = ' + JSON.stringify(originalData) + ';';
	fs.writeFile(
		'./test/html/data/' + (type || 'data') + '.js',
		context,
		function(err) {
			if(err) {
				console.error(err);
			}
		}
	);
}
